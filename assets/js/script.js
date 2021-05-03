//its time to flickin rewrite it
console.log('CurrencyConverter by AyManXd Injected');
var rub = 75;
const websitesList = [
    { "website": 'https://swap.gg', "class": "div.item span.p" },
    { "website": 'https://www.amazon.com', "class": ".a-color-price" },
];

var currentSite = websitesList.filter(element => {
    console.log(document.location.origin,element.website);
    if (element.website == document.location.origin) {
        return true;
    }
});

if (currentSite) {
    setInterval(() => starParse(), 3000);
}

function starParse() {
    var currentSiteSelector = currentSite[0].class;
    var notParsedItems = document.querySelectorAll(currentSiteSelector + ":not(.checked-item)");
    var parsedItem = document.querySelectorAll(currentSiteSelector + '.checked-item');
    if (notParsedItems) {
        for (i = 0; i < notParsedItems.length; i++) {
            var text = notParsedItems.item(i).innerText.replace('$', '');
            var ready = parseFloat(text.replace(/,/g, '')) * rub;
            notParsedItems.item(i).classList.add("checked-item");
            notParsedItems.item(i).innerText = ('₽' + ready.toFixed(2));
        }
    } else {
        for (i = 0; i < parsedItem.length; i++) {
            var text = parsedItem.item(i).innerText.replace('$', '');
            var ready = parseFloat(text.replace(/,/g, '')) * rub;
            parsedItem.item(i).innerText = ('₽' + ready.toFixed(2));
        }
    }
}