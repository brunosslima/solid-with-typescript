import { Messaging } from './services/messaging';
import { Order } from './class/order';
import { Product } from './class/product';
import { ShoppingCart } from './class/shopping-cart';
import { FivePercentDiscount } from './class/discount';

const fivePercentDiscount = new FivePercentDiscount();
//const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(fivePercentDiscount);
const messaging = new Messaging();
const order = new Order(shoppingCart, messaging);

shoppingCart.addItem(new Product('T-shirt', 49.9));
shoppingCart.addItem(new Product('Notebook', 9.9));
shoppingCart.addItem(new Product('Pencil', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
