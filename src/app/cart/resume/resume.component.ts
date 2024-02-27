import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/store.module';
import { Product } from '../../shared/models/product';
import { Observable } from 'rxjs';
import * as CartSelectors from '../../store/cart/cart.selectors';
import * as CartActions from '../../store/cart/cart.actions';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss'
})
export class ResumeComponent implements OnInit {
  products$: Observable<Product[]>;
  
  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(CartSelectors.selectCart);
  }

  ngOnInit(): void {
    this.store.dispatch(CartActions.load());
  }

  remove(productId: string): void {
    this.store.dispatch(CartActions.removeProduct({ productId }));
  }
}
