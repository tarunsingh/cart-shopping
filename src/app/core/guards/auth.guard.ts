import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from '../http/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  private isProfileCalled: boolean;
  constructor(private userService: UserService, private router: Router) {

  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkIfLoggedIn(state);
  }

  checkIfLoggedIn(state): any {
    if (state.url === '/login') {
      return !this.userService.isLoggedIn();
    } else {
      return this.userService.isLoggedIn();
    }
  }
}
