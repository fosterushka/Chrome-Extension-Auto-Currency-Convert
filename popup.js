let x = document.getElementsByClassName("price");
for (i = 0; i < x.length; i++) {
    var text = x.item(i).innerText.replace('$', '');
    var ready = parseFloat(text, 10) * 64;
    var steam = ready - parseInt((ready * .13));
    x.item(i).innerText = (ready + '/' + steam)
}