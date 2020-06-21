window.ready = async function () {


    let getApiCurrency = await fetch('https://api.exchangeratesapi.io/latest?symbols=USD,RUB');

    console.log(getApiCurrency.json());


    await (getCurrency);
    // let rub = getCurrency.responseJSON.rates.RUB;
    setInterval(startParse, 1000);
    setTimeout(startParse, 0);

    function startParse() {
        let x = document.querySelectorAll('div.item span.p:not(.checked-item)');
        let y = document.querySelectorAll('div.item span.p.checked-item');
        if (x) {
            for (i = 0; i < x.length; i++) {
                let text = x.item(i).innerText.replace('$', '');
                let ready = parseFloat(text) * rub;
                x.item(i).classList.add("checked-item");
                x.item(i).innerText = ('₽' + ready.toFixed(2));
            }
        } else {
            for (i = 0; i < y.length; i++) {
                let text = y.item(i).innerText.replace('$', '');
                let ready = parseFloat(text) * rub;
                y.item(i).innerText = ('₽' + ready.toFixed(2));
            }
        }
    }
};