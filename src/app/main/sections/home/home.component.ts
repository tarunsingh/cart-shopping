import { Component, OnInit } from '@angular/core';
import { AdapterService } from '../../../core/adapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[];

  constructor(private adapterService: AdapterService, private router: Router) { }

  ngOnInit() {
    this.adapterService.getProductList().subscribe((res) => {
      this.products = res;
    }, (err) => {
      console.error(err);
    });
  }

  addToCart(event: any): void {
    if (this.adapterService.isLoogedIn()) {
      this.adapterService.addToCart(event);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
