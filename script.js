const currency = 63.99;

setInterval(startParse,1000);
setTimeout(startParse, 0);
function startParse() {
    let x = document.querySelectorAll('.price:not(.checked-item), div.product-price:not(.checked-item), #price_inside_buybox:not(.checked-item), #priceblock_dealprice:not(.checked-item), .priceBlockStrikePriceString:not(.checked-item)');
    let y = document.querySelectorAll('.price .checked-item, div.product-price, #price_inside_buybox, #priceblock_dealprice, .priceBlockStrikePriceString');
    if (x) {
        for (i = 0; i < x.length; i++) {
            let text = x.item(i).innerText.replace('$', '');
            let ready = parseFloat(text) * currency;
            x.item(i).classList.add("checked-item");
            x.item(i).innerText = ('₽' + ready.toFixed(2));
        }
    } else {
        for (i = 0; i < y.length; i++) {
            let text = y.item(i).innerText.replace('$', '');
            let ready = parseFloat(text) * currency;
            y.item(i).innerText = ('₽' + ready.toFixed(2));
        }
    }
}

// x.item(i).style.color = "#008000";
// let steam = ready - parseInt((ready * .10));

