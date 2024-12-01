class CurrencyConverter {
    constructor() {
        this.rates = null;
        this.fromCurrency = 'USD';
        this.toCurrency = 'RUB';
        this.amount = 1;
        this.lastFetch = null;
        this.selectionMode = false;

        this.initializeElements();
        this.loadRates();
        this.setupEventListeners();
        this.loadPreferences();
        this.setupMessageListener();
    }

    initializeElements() {
        this.fromBox = document.getElementById('fromCurrency');
        this.toBox = document.getElementById('toCurrency');
        this.switchButton = document.querySelector('.switch-button');
        this.dropdown = document.getElementById('currencyDropdown');
        this.rateInfo = document.querySelector('.rate-info');
        this.selectModeButton = document.getElementById('selectModeButton');
    }

    setupMessageListener() {
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message.action === 'selectionModeChanged') {
                this.selectionMode = message.selectionMode;
                this.updateSelectionButton();
            }
            return true;
        });
    }

    updateSelectionButton() {
        this.selectModeButton.classList.toggle('active', this.selectionMode);
        this.selectModeButton.textContent = this.selectionMode ?
            '🎯 Exit Selection Mode' :
            '🎯 Select Price Element';
    }

    async loadPreferences() {
        const prefs = await chrome.storage.local.get(['fromCurrency', 'toCurrency']);
        if (prefs.fromCurrency) {
            this.fromCurrency = prefs.fromCurrency;
            this.fromBox.querySelector('.currency-code').textContent = prefs.fromCurrency;
        }
        if (prefs.toCurrency) {
            this.toCurrency = prefs.toCurrency;
            this.toBox.querySelector('.currency-code').textContent = prefs.toCurrency;
        }
        this.updateConversion();
    }

    async loadRates() {
        try {
            const stored = localStorage.getItem('currencyRates');
            const storedTime = localStorage.getItem('lastFetchTime');

            if (stored && storedTime) {
                const timeDiff = Date.now() - parseInt(storedTime);
                if (timeDiff < 24 * 60 * 60 * 1000) {
                    this.rates = JSON.parse(stored);
                    this.updateConversion();
                    return;
                }
            }

            const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
            const data = await response.json();
            this.rates = data.rates;
            localStorage.setItem('currencyRates', JSON.stringify(this.rates));
            localStorage.setItem('lastFetchTime', Date.now().toString());

            this.updateConversion();
        } catch (error) {
            console.error('Error fetching rates:', error);
        }
    }

    setupEventListeners() {
        this.fromBox.addEventListener('click', () => this.showDropdown('from'));
        this.toBox.addEventListener('click', () => this.showDropdown('to'));
        this.switchButton.addEventListener('click', () => this.switchCurrencies());
        this.selectModeButton.addEventListener('click', () => this.toggleSelectionMode());

        document.addEventListener('click', (e) => {
            if (!this.dropdown.contains(e.target) &&
                !this.fromBox.contains(e.target) &&
                !this.toBox.contains(e.target)) {
                this.dropdown.style.display = 'none';
            }
        });
    }

    async toggleSelectionMode() {
        this.selectionMode = !this.selectionMode;
        this.updateSelectionButton();

        const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
        chrome.tabs.sendMessage(tab.id, {
            action: 'toggleSelection',
            selectionMode: this.selectionMode
        });
    }

    showDropdown(type) {
        const box = type === 'from' ? this.fromBox : this.toBox;
        const rect = box.getBoundingClientRect();

        this.dropdown.style.top = `${rect.bottom}px`;
        this.dropdown.style.left = `${rect.left}px`;
        this.dropdown.style.display = 'block';

        this.dropdown.innerHTML = Object.keys(this.rates).map(currency => `
            <div class="currency-option" data-currency="${currency}" data-type="${type}">
                ${currency}
            </div>
        `).join('');

        this.dropdown.querySelectorAll('.currency-option').forEach(option => {
            option.addEventListener('click', (e) => {
                const currency = e.target.dataset.currency;
                const type = e.target.dataset.type;

                if (type === 'from') {
                    this.fromCurrency = currency;
                } else {
                    this.toCurrency = currency;
                }

                this.updateConversion();
                this.dropdown.style.display = 'none';

                chrome.storage.local.set({
                    fromCurrency: this.fromCurrency,
                    toCurrency: this.toCurrency
                });
            });
        });
    }

    switchCurrencies() {
        [this.fromCurrency, this.toCurrency] = [this.toCurrency, this.fromCurrency];
        this.updateConversion();

        chrome.storage.local.set({
            fromCurrency: this.fromCurrency,
            toCurrency: this.toCurrency
        });
    }

    updateConversion() {
        if (!this.rates) return;

        const rate = this.rates[this.toCurrency] / this.rates[this.fromCurrency];
        const convertedAmount = this.amount * rate;

        this.fromBox.querySelector('.currency-code').textContent = this.fromCurrency;
        this.fromBox.querySelector('.currency-amount').textContent = this.amount.toFixed(2);

        this.toBox.querySelector('.currency-code').textContent = this.toCurrency;
        this.toBox.querySelector('.currency-amount').textContent = convertedAmount.toFixed(2);

        this.rateInfo.textContent = `1 ${this.fromCurrency} = ${rate.toFixed(2)} ${this.toCurrency}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new CurrencyConverter();
});
