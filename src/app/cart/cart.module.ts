import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { cartGuard } from './cart.guard';

const routes: Routes = [
  {
    path: '',
    component: ResumeComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [cartGuard]
  }
];

@NgModule({
  declarations: [
    ResumeComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ]
})
export class CartModule { }
