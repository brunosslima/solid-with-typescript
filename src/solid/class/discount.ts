export abstract class Discount {
  protected discount = 0;

  calculate(totalPrice: number): number {
    return totalPrice - totalPrice * (this.discount / 100);
  }
}

export class FivePercentDiscount extends Discount {
  protected readonly discount = 5;
}

export class TenPercentDiscount extends Discount {
  protected readonly discount = 10;
}

export class NoDiscount extends Discount {}
