import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/store.module';
import { selectProducts } from '../../store/product/product.selectors';
import * as ProductActions from '../../store/product/product.actions';
import { Product } from '../../shared/models/product';
import { Observable } from 'rxjs';
import * as CartActions from '../../store/cart/cart.actions';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent implements OnInit {
  products$: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(selectProducts);
  }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.load({ start: 0, end: 20 }));
  }

  addProductCart(productId: string): void {
    this.store.dispatch(CartActions.addProduct({ productId }));
  }
}
