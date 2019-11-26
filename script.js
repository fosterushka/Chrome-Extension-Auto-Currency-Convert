setInterval(startParse,1000);
setTimeout(startParse, 1000, undefined);
function startParse() {
    $.getJSON('https://free.currconv.com/api/v7/convert?q=USD_RUB&compact=ultra&apiKey=17fd28c2f5a1d66c7522', function (data) {
        const currency = data.USD_RUB.toString().substring(0, 5);
        let x = document.querySelectorAll('.price:not(.checked-item)');
        let y = document.querySelectorAll('.price .checked-item');
        if (x) {
            for (i = 0; i < x.length; i++) {
                let text = x.item(i).innerText.replace('$', '');
                let ready = parseInt(text, 10) * parseInt(currency);
                let steam = ready - parseInt((ready * .10));
                x.item(i).classList.add("checked-item");
                x.item(i).innerText = ('₽' + ready + '/' + steam);
            }
        } else {
            for (i = 0; i < y.length; i++) {
                let text = y.item(i).innerText.replace('$', '');
                let ready = parseInt(text, 10) * parseInt(currency);
                let steam = ready - parseInt((ready * .10));
                y.item(i).innerText = ('₽' + ready + '/' + steam);
            }
        }
    });
}

// x.item(i).style.color = "#008000";

