var subtotal = (13 + 1) * 5;      //subtotal is 70
var shipping = 0.5 * (13 + 1);    //shipping is 7

var total = subtotal + shipping;  // Total is 77

var elSub = document.getElementById('subtotal');
elSub.textContent = subtotal;

var elShip = document.getElementById('shipping');
elShip.textContent = shipping;

var elTotal = document.getElementById('total');
elTotal.textContent = total;