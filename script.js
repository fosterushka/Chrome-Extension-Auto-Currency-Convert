$.getJSON('https://free.currconv.com/api/v7/convert?q=USD_RUB&compact=ultra&apiKey=17fd28c2f5a1d66c7522',function (data) {
    const currency = data.USD_RUB.toString().substring(0, 5);

    setTimeout(function(){
        let x = document.getElementsByClassName("price");
        for (i = 0; i < x.length; i++) {
            var text = x.item(i).innerText.replace('$', '');
            var ready = parseFloat(text, 10) * 64;
            var steam = ready - parseInt((ready * .10));
            x.item(i).innerText = (ready + '/' + steam)
        }
    },5000)
});
