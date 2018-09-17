import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Router } from '@angular/router';
import { AdapterService } from '../../../core/adapter.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy, AfterViewInit {
  modalRef: BsModalRef;
  cartItems: any;
  size = 0;
  pincode: number;
  DeliveryMsg: boolean;
  showError: boolean;
  shippingOption: any = {value: 3};

  @ViewChild('cartTemplate') cartTemplate;

  constructor(private modalService: BsModalService,
              private adapterService: AdapterService,
              private router: Router) { }

  ngOnInit() {
    if (this.modalRef) {
      this.modalRef.hide();
    }
  }

  ngAfterViewInit() {
    setTimeout(() => this.openModal());
  }

  openModal(): void {
    this.modalService.onHide.subscribe((reason: string) => {
      if (this.router.url !== '/payment') {
        this.router.navigate(['']);
      }
    });

    let obj: any = Object.assign({ }, { 'class': 'cart-modal' });
    this.modalRef = this.modalService.show(this.cartTemplate, obj);
    this.cartItems = this.adapterService.getCartItems();
    this.size = this.adapterService.getCartSize();
  }

  addItem(item: any): void {
    if (item.count < 10) {
      this.adapterService.addToCart(item.data);
    }
  }

  removeItem(item: any): void {
    if (item.count > 1) {
      this.adapterService.removeCartItem(item.data);
    }
  }

  deleteItem(item: any): void {
    this.adapterService.deleteItem(item.data);
  }

  getSum(): number {
    let sum: number = 0;
    for (let i = 0; i < this.cartItems.length; i++) {
      sum += this.cartItems[i].count * this.cartItems[i].data.price;
    }
    return sum;
  }

  showDelivery(): void {
    if (this.pincode && this.pincode.toString().length === 6) {
      this.DeliveryMsg = true;
      this.showError = false;
    } else if (this.pincode && this.pincode.toString().length !== 6) {
      this.showError = true;
    }
  }

  ngOnDestroy(): void {
    this.modalRef.hide();
  }

}
