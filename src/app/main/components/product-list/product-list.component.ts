import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() products: any[];

  @Output() cartEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  addToCart(event: any): void {
    this.cartEvent.emit(event);
  }

}
