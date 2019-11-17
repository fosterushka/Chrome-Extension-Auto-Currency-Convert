window.addEventListener('load', function () {
    let x = document.getElementsByClassName("price");

    document.getElementById("start").addEventListener("click", function(){
        if (x === HTMLCollection) {
            // let x = document.getElementsByClassName("price");
            for (i = 0; i < x.length; i++) {
                var text = x.item(i).innerText.replace('$', '');
                var ready = parseFloat(text, 10) * 63;
                var steam = ready - parseInt((ready * .09));
                x.item(i).innerText = parseInt(ready) + '/' + parseInt(steam)
            }
            alert('Успешно')
        } else {
            alert('Ошибка')
        }
    });
});
