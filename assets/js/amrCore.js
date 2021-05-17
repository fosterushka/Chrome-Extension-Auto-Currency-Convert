//Chrome extension, i only work on it when I have free time 😊
//Feel free to create pull request
//made by @idevmans aka AyManXd 2019-2021

console.log('CurrencyConverter by AyManXd Injected');

//async function apiFetch () {
//    var api = await fetch('https://api.ratesapi.io/api/latest?symbols=RUB&base=USD');
//    return api.rates.RUB
//}
//console.log(apiFetch());

let currencyApi = 75 //hardcoded for a while

//store it somewhere else
const websitesList = [
    { "website": 'https://swap.gg', "class": "div.item span.p", "regex": /\$+|,/g },
    { "website": 'https://www.amazon.com', "class": ".a-color-price" },
];

var currentSite = websitesList.filter(element => {
    if (element.website == document.location.origin) {
        return element;
    }
});

//transform node to HTML element
function nodeListToArray(nodeToArr) {
    return Array.prototype.slice.call(nodeToArr);
}

function objectProcessing(foreachItem) {
    let produce = foreachItem.innerText.replace(/\$+|,/g, '') * currencyApi;
    return produce.toFixed(2);
}

function starParse() {
    var classSelector = currentSite[0].class;
    var notParsedItems = document.querySelectorAll(classSelector + ":not(.amr-parsed-item)");
    var parsedItem = document.querySelectorAll(classSelector + '.amr-parsed-item');
    if (notParsedItems) {
        nodeListToArray(notParsedItems).forEach(el => {
            el.innerText = objectProcessing(el);
            el.classList.add("amr-parsed-item");
        });
    } else {
        nodeListToArray(parsedItem).forEach(el => {
            objectProcessing(el);
            el.classList.add("amr-parsed-item");
        });
    }
}

if (currentSite) {
    setInterval(() => starParse(), 3000);
}