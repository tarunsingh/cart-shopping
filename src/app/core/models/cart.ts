
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Cart {
  private length = 0;
  private items: any[] = [];
  private cartModified: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor() {}

  getItems(): any[] {
    return this.items;
  }

  addItem(item: any): void {
    this.length += 1;
    let obj: any = this.getCartItemById(item.id);
    if (obj) {
      obj.count += 1;
    } else {
      this.items.push({ data: item, count: 1 });
    }
    this.notify();
  }

  removeItem(item: any): void {
    let obj: any = this.getCartItemById(item.id);
    if (obj) {
      if (obj.count > 1) {
        obj.count -= 1;
      } else if (obj.count === 1) {
        this.items.splice(this.items.indexOf(obj), 1);
      }
      this.length -= 1;
    }
    this.notify();
  }

  deleteItem(item: any): void {
    let obj: any = this.getCartItemById(item.id);
    this.length -= obj.count;
    this.items.splice(this.items.indexOf(obj), 1);
    this.notify();
  }

  clearCart(): void {
    this.items = [];
    this.length = 0;
    this.notify();
  }

  size(): number {
    return this.length;
  }

  notify(): void {
    this.cartModified.next(true);
  }

  listenCart(): BehaviorSubject<boolean> {
    return this.cartModified;
  }

  getCartItemById(id) {
    let items: any[] = this.items.filter((value) => {
      return value.data.id === id;
    });

    return items[0];
  }

}
