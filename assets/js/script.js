 console.log('ayman exchange injected');
 async function getExchangeRate() {
    if (localStorage.hasOwnProperty('currency')) {
        let getApiCurrency = await fetch('https://api.exchangeratesapi.io/latest?symbols=USD,RUB');
        console.log(JSON.stringify(getApiCurrency));
    }
    let rate_currency = window.localStorage.setItem('rate_currency', (getApiCurrency));
   
    await (rate_currency);
    let rub = rate_currency.responseJSON.rates.RUB; // todo
    setInterval(startParse, 1000);
    setTimeout(startParse, 0);
   
    const websitesUtils = new Map([
        ['https://swap.gg/*', 'div.item span.p'],
        ['https://amazon.com/*', '.price'], //test class
        ['https://dmarket.com/*', '.price'], //test class
    ]);
    websitesUtils.find(window.location.href);
    console.log(websitesUtils);
}
 

 function startParse() {
     console.log('in func');
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

chrome.scripting.executeScript({
    function: startParse,getExchangeRate
});