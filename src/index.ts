export class Item {
  constructor(
    private price: number = 0,
  ) {}

  calculateDiscount(rate: number): number {
    return this.price - (this.price * 0.01 * rate);
  }
}

export class Order {
  private items: Item[] = [];
  private payment: number; 
  private paymentAt: Date = null;

  add(item: Item) {
    this.items.push(item);
  }

  calculateDiscount(rate: number): number {
    return this.items.reduce((price,item) => price + item.calculateDiscount(rate), 0); 
  }

  pay(paymentAt: Date, discountRate: number = 0) {
    this.payment = this.calculateDiscount(discountRate);
    this.paymentAt = paymentAt;
  }

  getPayment(): number {
    return this.payment;
  }

  receipt(): string {
    return `${this.paymentAt.getFullYear()}/${this.paymentAt.getMonth()+1} ${this.payment}円`;
  }
}
