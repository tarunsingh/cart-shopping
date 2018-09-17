import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Components } from './components/components';
import { Sections } from './sections/sections';
import { AppRoutes } from './main.route';
import { CoreModule } from '../core/core.module';
import { MainComponent } from './main.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { NumberOnlyDirective } from './directives/number-only.directive';

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes, {useHash: true}),
    ModalModule.forRoot()
  ],
  declarations: [ Components, Sections, MainComponent, NumberOnlyDirective ],
  exports: [ MainComponent ]
})
export class MainModule { }
