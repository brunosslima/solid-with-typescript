export abstract class Discount {
  abstract calculate(totalPrice: number): number;
}

export class FivePercentDiscount extends Discount {
  private readonly discount = 5;

  calculate(totalPrice: number): number {
    return totalPrice - totalPrice * (this.discount / 100);
  }
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 10;

  calculate(totalPrice: number): number {
    return totalPrice - totalPrice * (this.discount / 100);
  }
}

export class NoDiscount extends Discount {
  calculate(totalPrice: number): number {
    return totalPrice;
  }
}
