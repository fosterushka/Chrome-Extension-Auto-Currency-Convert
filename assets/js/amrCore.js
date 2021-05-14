//Chrome extension, i work on it only when i do have free time )
//Feel free to create pull request
//made by @idevmans aka AyManXd 2019-2020

console.log('CurrencyConverter by AyManXd Injected');

//async function apiFetch () {
//    var api = await fetch('https://api.ratesapi.io/api/latest?symbols=RUB&base=USD');
//    return api.rates.RUB
//}
//console.log(apiFetch());

let rub = 75 //hardcoded for a while

//move it to remote server e.g google sheets and parse it to keep up to date
const websitesList = [
    { "website": 'https://swap.gg', "class": "div.item span.p" },
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

function itemToObjectFactory(foreachItem) {
    
}

function starParse() {
    var currentSiteSelector = currentSite[0].class;
    var notParsedItems = document.querySelectorAll(currentSiteSelector + ":not(.amr-parsed-item)");
    var parsedItem = document.querySelectorAll(currentSiteSelector + '.amr-parsed-item');
    var reg = /^\d+$/;
     if (notParsedItems) {
        nodeListToArray(notParsedItems).forEach(el => {
            el.innerHTML = el.innerHTML.replace(reg, '') * rub;
            el.classList.add("amr-parsed-item");
        });
     } else {
         nodeListToArray(parsedItem).forEach(el => {
            el.innerHTML = el.innerHTML.replace(reg, '') * rub;
         });
     }
    
    //if (notParsedItems) {
    //    for (i = 0; i < notParsedItems.length; i++) {
    //        var text = notParsedItems.item(i).innerText.replace('$', '');
    //        var ready = parseFloat(text.replace(/,/g, '')) * rub;
    //        notParsedItems.item(i).classList.add("checked-item");
    //        notParsedItems.item(i).innerText = ('₽' + ready.toFixed(2));
    //    }
    //} else {
    //    for (i = 0; i < parsedItem.length; i++) {
    //        var text = parsedItem.item(i).innerText.replace('$', '');
    //        var ready = parseFloat(text.replace(/,/g, '')) * rub;
    //        parsedItem.item(i).innerText = ('₽' + ready.toFixed(2));
    //    }
    //}
}

if (currentSite) {
    setInterval(() => starParse(), 3000);
}