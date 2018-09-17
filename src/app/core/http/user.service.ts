import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  private loggedIn: boolean;
  private userObservable: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor() { }

  login(data: any) {
    this.loggedIn = true;
    this.userObservable.next({userName: data.userName});
    return this.userObservable;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

}
