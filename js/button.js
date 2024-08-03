function buy() {
    document.getElementById("btn").style.background = "lime";
    document.getElementById("btn").innerHTML = "В корзине";
}

let basket = 0;
const basketPrice = document.querySelector('.price')
const  btn = document.getElementById('btn');
let price = btn.previousSibling.previousSibling.innerHTML;
let buyf = 0;
price = price.replace(' ','');
price = parseInt(price);
localStorage.clear();

if (localStorage.getItem('basket') !== null) {
    basket = localStorage.getItem('basket');
    basketPrice.innerHTML = basket;
}

if (localStorage.getItem('buyf') !== null) {
    buyf = localStorage.getItem('buyf');
    buyf = parseInt(buyf);
    if (!buyf) {
        btn.style.background = 'lime';
        btn.innerHTML = " В корзине";
    } else {
        btn.style.background = 'silver';
        btn.innerHTML = 'Купить';
       }
    }

function buy() {
  if (!buyf) {
    btn.style.background = 'lime';
    btn.innerHTML = " В корзине";
    basket = parseInt(basket) + price;
    buyf = 1;
   } else {
    btn.style.background = 'silver';
    btn.innerHTML = 'Купить';
    basket = parseInt(basket) - price;
    buyf = 0;
   }
   basketPrice.innerHTML = basket;
   localStorage.setItem('basket', basket);
   localStorage.setItem('buyf', buyf);
}

