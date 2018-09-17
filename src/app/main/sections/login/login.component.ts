import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { AdapterService } from '../../../core/adapter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {
  modalRef: BsModalRef;
  userName: string;
  password: string;
  @ViewChild('loginTemplate') loginTemplate;
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

    let obj: any = Object.assign({ }, { 'class': 'login-modal' });
    this.modalRef = this.modalService.show(this.loginTemplate, obj);

  }

  login(): void {
    this.adapterService.login({userName: this.userName, password: this.password});
    this.router.navigate(['']);
  }

  ngOnDestroy(): void {
    this.modalRef.hide();
  }

}
