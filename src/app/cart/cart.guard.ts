import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, lastValueFrom, take } from 'rxjs';
import * as CartSelectors from '../store/cart/cart.selectors';
import * as CartActions from '../store/cart/cart.actions';

export const cartGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const store = inject(Store);

  store.dispatch(CartActions.load());
  const cart = await (lastValueFrom(store.select(CartSelectors.selectCartCount).pipe(
    filter(c => c > 0),
    take(1),
    )));

  if (cart === 0) {
    router.navigateByUrl('/');
    return false;
  } 
  
  return true;
};
