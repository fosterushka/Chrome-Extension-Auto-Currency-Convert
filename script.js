$.getJSON('https://free.currconv.com/api/v7/convert?q=USD_RUB&compact=ultra&apiKey=17fd28c2f5a1d66c7522',function (data) {
    const currency = data.USD_RUB.toString().substring(0, 5);
    console.log(parseFloat(currency));

    const x = document.getElementsByClassName("price");

    for (let i = 0; i < x.length; i++) {
        var text = x.item(0).innerText.replace('$', '');
        var ready = parseFloat(text, 10) * currency;
        var steam = ready - parseInt((ready * .13));
        x.item(i).innerText = parseInt(ready) + '/' + parseInt(steam)
    }

});
