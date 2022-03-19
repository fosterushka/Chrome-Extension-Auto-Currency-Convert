//Chrome extension, i only work on it when I have free time 😊
//Feel free to create pull request
//made by @idevmans aka AyManXd 2019-2022

console.log('CurrencyConverter by AyManXd Injected');

//async function apiFetch () {
//    var api = await fetch('https://api.ratesapi.io/api/latest?symbols=RUB&base=USD');
//    return api.rates.RUB
//}
//console.log(apiFetch());

// let currencyApi = 75 //hardcoded for a while

//store it somewhere else
const websitesList = [
    { "domain": 'https://swap.gg', "class": "div.item span.p", "regex": /\$+|,/g },
];

let currentWebSite = websitesList.filter(websiteElement => {
    if (websiteElement.domain == document.location.origin) {
        return websiteElement;
    }
});

let selector = currentWebSite[0].class.toString();

// function starParse() {
//     var classSelector = currentSite[0].class;
//     var notParsedItems = document.querySelectorAll(classSelector + ":not(.amr-parsed-item)");
//     var parsedItem = document.querySelectorAll(classSelector + '.amr-parsed-item');
//     if (notParsedItems) {
//         nodeListToArray(notParsedItems).forEach(el => {
//             el.innerText = objectProcessing(el);
//             el.classList.add("amr-parsed-item");
//         });
//     } else {
//         nodeListToArray(parsedItem).forEach(el => {
//             objectProcessing(el);
//             el.classList.add("amr-parsed-item");
//         });
//     }
// }

// //transform node to HTML element
// function nodeListToArray(nodeToArr) {
//     return Array.prototype.slice.call(nodeToArr);
// }

// function objectProcessing(foreachItem) {
//     let produce = foreachItem.innerText.replace(/\$+|,/g, '') * currencyApi;
//     return produce.toFixed(2);
// }

// if (currentSite) {
//     setInterval(() => starParse(), 3000);
// }


let observer = new IntersectionObserver((entries, observer) => {
    console.log(entries,observer);
    entries.forEach(entry => {
        console.log(entry);

        if (entry.isIntersecting) {
            console.log(entry);
        } else {
            a.classList.remove('active');
        }
    });
}, { threshold: 0.85 });

let parseItems = function() {
    document.querySelectorAll().forEach(
        item => { observer.observe(item) }
    );
} 

//loot at https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver provide to watch if chanbge being made to the DOM element
setTimeout(parseItems, 5000);