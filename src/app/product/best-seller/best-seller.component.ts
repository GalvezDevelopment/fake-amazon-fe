import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/store.module';
import { selectProducts } from '../../store/product/product.selectors';
import { Product } from '../../shared/models/product';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent {
  products$: Observable<Product[]>;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(selectProducts);
  }
}
