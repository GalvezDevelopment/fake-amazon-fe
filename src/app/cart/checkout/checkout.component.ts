import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CartActions from '../../store/cart/cart.actions';
import * as CartSelectors from '../../store/cart/cart.selectors';
import { AppState } from '../../store/store.module';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  cartQuantity$: Observable<number>;

  constructor(private store: Store<AppState>, private activatedRoute: Router) {
    this.cartQuantity$ = this.store.select(CartSelectors.selectCartQuantity);
  }

  pay(): void {
    this.store.dispatch(CartActions.pay());
    this.activatedRoute.navigateByUrl('/');
  }
}
