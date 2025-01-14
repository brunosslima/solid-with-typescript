import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const order = new Order(shoppingCart, messaging);

shoppingCart.addItem(new Product('T-shirt', 49.9));
shoppingCart.addItem(new Product('Notebook', 9.9));
shoppingCart.addItem(new Product('Pencil', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
