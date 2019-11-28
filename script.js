var currency = 63.99;

setInterval(startParse,5000);
setTimeout(startParse, 0);
function startParse() {
    let x = document.querySelectorAll('.price:not(.checked-item)');
    let y = document.querySelectorAll('.price .checked-item');
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

