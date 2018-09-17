import { Injectable } from '@angular/core';
import { UserService } from './http/user.service';
import { ProductService } from './http/product.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Product } from './models/product';
import { Cart } from './models/cart';
import { User } from './models/user';

@Injectable()
export class AdapterService {

  private cart: Cart;
  private user: User;

  constructor( private userService: UserService, private productService: ProductService) {
    this.cart = new Cart();
    this.user = new User('');
  }

  getProductList() {
    return Observable.create((observer: Observer<any>) => {
      this.productService.getProducts().subscribe((res: any) => {
        let products: Product[] = [];
        res.forEach((data: any, index: number) => {
          let product: Product = new Product(data);
          products.push(product);
        });
        observer.next(products);
        observer.complete();
      }, err => observer.error(err));
    });
  }

  addToCart(item: Product): void {
    this.cart.addItem(item);
    this.productService.updateCart(item, 'add');
  }

  getCartEvents(): any {
    return this.cart.listenCart();
  }

  getCartSize(): number {
    return this.cart.size();
  }

  getCartItems(): any {
    return this.cart.getItems();
  }

  removeCartItem(item: any): void {
    this.cart.removeItem(item);
    this.productService.updateCart(item, 'remove');
  }

  deleteItem(item: any): void {
    this.cart.deleteItem(item);
    this.productService.updateCart(item, 'delete');
  }

  login(data): void {
    this.userService.login(data).subscribe((res) => {
      console.log(res);
      this.user.setName(res.userName);
      console.log(this.user);
    });
  }

  getUser(): User {
    return this.user;
  }

  isLoogedIn(): boolean {
    return this.userService.isLoggedIn();
  }
}
