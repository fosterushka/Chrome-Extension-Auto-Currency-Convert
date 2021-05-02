//its time to flickin rewrite it
//store currency exchange from
//if (!localStorage.hasOwnProperty('currency')) {
//    let getApiCurrency = fetch('https://api.exchangeratesapi.io/latest?symbols=USD,RUB');
//}
//setInterval(startParse, 1000);
//setTimeout(startParse, 0);
var rub = 75;
const websitesList = [
    { "website": 'https://swap.gg/', "class": "div.item span.p" },
    { "website": 'https://amazon.com/', "class": ".price" },
    { "website": 'https://gearbest.com/', "class": ".price" },
];
var currentSite = websitesList.filter(element => {
    for (var property in element) {
        if (element.hasOwnProperty(property)) {
            if (element[property] == window.location.href) {
                return true;
            }
        }
    }
});

function starParse() {
    var currentSiteSelector = currentSite[0].class;
    var notParsedItems = document.querySelectorAll(currentSiteSelector + ":not(.checked-item)");
    console.log(notParsedItems);
    var parsedItem = document.querySelectorAll(currentSiteSelector + '.checked-item');
    if (notParsedItems) {
        for (i = 0; i < notParsedItems.length; i++) {
            var text = notParsedItems.item(i).innerText.replace('$', '');
            var ready = parseFloat(text) * rub;
            notParsedItems.item(i).classList.add("checked-item");
            notParsedItems.item(i).innerText = ('₽' + ready.toFixed(2));
        }
    } else {
        for (i = 0; i < parsedItem.length; i++) {
            var text = parsedItem.item(i).innerText.replace('$', '');
            var ready = parseFloat(text) * rub;
            parsedItem.item(i).innerText = ('₽' + ready.toFixed(2));
        }
    }
}

window.addEventListener("load", () => {
    setInterval(() => starParse(), 5000);
});