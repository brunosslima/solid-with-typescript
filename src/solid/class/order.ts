import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: Messaging,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Cart is empty...');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Order processed successfully. Total $: ${this.cart.totalWithDiscount()}`,
    );
    this.saveOrder();
    this.cart.clear();
  }

  saveOrder(): void {
    console.log('Order saved successfully');
  }
}
