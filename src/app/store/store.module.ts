import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule as AppStateModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Product } from '../shared/models/product';
import { productReducer } from './product/product.reducer';
import { ProductEffects } from './product/product.effects';
import { cartReducer } from './cart/cart.reducer';
import { CartEffects } from './cart/cart.effects';

export interface AppState {
  products: Product[];
  cart: Product[];
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppStateModule.forRoot({ products: productReducer, cart: cartReducer }),
    EffectsModule.forRoot([ProductEffects, CartEffects])
  ]
})
export class StoreModule { }
