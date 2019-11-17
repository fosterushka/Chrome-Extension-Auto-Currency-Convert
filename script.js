// console.log('test1');
// var test = '123';
// var x = document.getElementsByClassName("price");
// document.getElementById("start").addEventListener("click", function () {
//     if (x === HTMLCollection) {
//         // let x = document.getElementsByClassName("price");
//         for (let i = 0; i < x.length; i++) {
//             var text = x.item(i).innerText.replace('$', '');
//             var ready = parseFloat(text, 10) * 63;
//             var steam = ready - parseInt((ready * .09));
//             x.item(i).innerText = parseInt(ready) + '/' + parseInt(steam)
//         }
//         alert('Успешно')
//     } else {
//         alert('Ошибка')
//     }
// });
// console.log('test2');
var x = document.getElementsByClassName("price");

for (let i = 0; i < x.length; i++) {
    var text = x.item(i).innerText.replace('$', '');
    var ready = parseFloat(text, 10) * 63.75;
    var steam = ready - parseInt((ready * .13));
    x.item(i).innerText = parseInt(ready) + '/' + parseInt(steam)
}