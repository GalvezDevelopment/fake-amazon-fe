import { createReducer, on } from '@ngrx/store';
import { Product } from '../../shared/models/product';
import * as CartActions from './cart.actions';

const initialState: Product[] = [];

const reducer = createReducer(
    initialState,
    on(CartActions.loaded, (state, { list }) => list),
    on(CartActions.pay, () => [])
);

export { reducer as cartReducer };