import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './http/product.service';
import { UserService } from './http/user.service';
import { AdapterService } from './adapter.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AdapterService,
    ProductService,
    UserService,
    AuthGuard
  ],
  declarations: []
})
export class CoreModule { }
