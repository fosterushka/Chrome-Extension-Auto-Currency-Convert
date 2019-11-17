var x = document.getElementsByClassName("price");



for (let i = 0; i < x.length; i++) {
    var text = x.item(i).innerText.replace('$', '');
    var ready = parseFloat(text, 10) * 63.75;
    var steam = ready - parseInt((ready * .13));
    x.item(i).innerText = parseInt(ready) + '/' + parseInt(steam)
}