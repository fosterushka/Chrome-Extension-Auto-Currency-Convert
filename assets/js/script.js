console.log('ayman exchange injected');
//its time to flickin rewrite it
//if (!localStorage.hasOwnProperty('currency')) {
//    let getApiCurrency = fetch('https://api.exchangeratesapi.io/latest?symbols=USD,RUB');
//    console.log(getApiCurrency);
//    console.log(JSON.stringify(getApiCurrency));
//    let rate_currency = window.localStorage.setItem('rate_currency', (getApiCurrency));
//    console.log(JSON.stringify(getApiCurrency));
//}
//setInterval(startParse, 1000);
//setTimeout(startParse, 0);
let rub = 75;
const websitesUtils = [
    {"website":'https://swap.gg/*', "class" : "div.item span.p"},
    {"website":'https://amazon.com/*', "class" : ".price"},
    {"website":'https://dmarket.com/*', "class" : ".price"},
];
console.log(websitesUtils);
websitesUtils.find(window.location.href);
console.log(websitesUtils);


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