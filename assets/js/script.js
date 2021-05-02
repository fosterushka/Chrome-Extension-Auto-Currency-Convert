//its time to flickin rewrite it
//store currency exchange from
//if (!localStorage.hasOwnProperty('currency')) {
//    let getApiCurrency = fetch('https://api.exchangeratesapi.io/latest?symbols=USD,RUB');
//}
//setInterval(startParse, 1000);
//setTimeout(startParse, 0);
var rub = 75;
const websitesList = [
    {"website":'https://swap.gg/', "class" : "div.item span.p"},
    {"website":'https://amazon.com/', "class" : ".price"},
    {"website":'https://dmarket.com/', "class" : ".price"},
];
var currentSite = websitesList.filter(element => {
    for (var property in element) {
        if (element.hasOwnProperty(property)) {
            if(element[property] == window.location.href) {
                return true;
            }
        }
    }
});

function startParse() {
    let x = document.querySelectorAll(currentSite+':not(.checked-item)');
    let y = document.querySelectorAll(currentSite+'.checked-item');
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