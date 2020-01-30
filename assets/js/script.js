$(window).ready(function () {

    let getCurrency = $.getJSON('https://api.exchangeratesapi.io/latest');
    let rub = getCurrency.responseJSON.rates.RUB;
    setInterval(startParse, 1000);
    setTimeout(startParse, 0);

    function startParse() {
        let x = document.querySelectorAll('.price:not(.checked-item), div.product-price:not(.checked-item), #price_inside_buybox:not(.checked-item), #priceblock_dealprice:not(.checked-item), .priceBlockStrikePriceString:not(.checked-item), .goodsIntro_price:not(.checked-item), .gbGoodsItem_price:not(.checked-item)');
        let y = document.querySelectorAll('.price .checked-item, div.product-price, #price_inside_buybox, #priceblock_dealprice, .priceBlockStrikePriceString, .goodsIntro_price, .gbGoodsItem_price');
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
});