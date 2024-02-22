import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule as AppStateModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Product } from '../shared/models/product';
import { productReducer } from './product/product.reducer';
import { ProductEffects } from './product/product.effects';

export interface AppState {
  products: Product[];
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppStateModule.forRoot({ products: productReducer }),
    EffectsModule.forRoot([ProductEffects])
  ]
})
export class StoreModule { }
