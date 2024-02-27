import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/store.module';
import { Observable } from 'rxjs';
import * as CartSelectors from '../../../store/cart/cart.selectors'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  productsCart$: Observable<number>;

  constructor(private store: Store<AppState>) {
    this.productsCart$ = this.store.select(CartSelectors.selectCartCount);
  }
}
