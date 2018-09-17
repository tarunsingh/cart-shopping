import { Component, OnInit } from '@angular/core';
import { AdapterService } from '../../../core/adapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  cartSize: number;
  user: any;
  constructor(private adapterService: AdapterService, private router: Router) { }

  ngOnInit() {
    this.user = this.adapterService.getUser();
    this.adapterService.getCartEvents().subscribe((value) => {
      this.cartSize = this.adapterService.getCartSize();
    });
  }

  openCart(): void {
    if (!this.adapterService.isLoogedIn()) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/cart']);
    }
  }

  openLogin(): void {
    if (!this.adapterService.isLoogedIn()) {
      this.router.navigate(['/login']);
    }
  }

}
