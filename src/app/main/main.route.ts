import { Routes } from '@angular/router';
import { HomeComponent } from './sections/home/home.component';
import { LoginComponent } from './sections/login/login.component';
import { CartComponent } from './sections/cart/cart.component';
import { PaymentComponent } from './sections/payment/payment.component';
import { AuthGuard } from '../core/guards/auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', component: HomeComponent},
      {
        path: 'login',
        canActivate: [AuthGuard],
        component: LoginComponent
      },
      {
        path: 'cart',
        canActivate: [AuthGuard],
        component: CartComponent
      },
    ]
  },
  {
    path: 'payment',
    component: PaymentComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' },
];

