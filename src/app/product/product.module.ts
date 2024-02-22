import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { BestWishedComponent } from './best-wished/best-wished.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'best-seller',
    pathMatch: 'full'
  },
  {
    path: 'best-seller',
    component: BestSellerComponent
  },
  {
    path: 'best-wished',
    component: BestWishedComponent
  }
];

@NgModule({
  declarations: [
    BestSellerComponent,
    BestWishedComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductModule { }
