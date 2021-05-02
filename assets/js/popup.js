function selectPriceElement() {
    chrome.tabs.executeScript({
        file: 'assets/js/script.js'
    });
}

document.getElementById('selectPriceElement').addEventListener('click', selectPriceElement);