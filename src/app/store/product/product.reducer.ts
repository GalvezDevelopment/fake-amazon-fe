import { createReducer, on } from '@ngrx/store';
import { Product } from '../../shared/models/product';
import * as ProductActions from './product.actions';

const initialState: Product[] = [];

const reducer = createReducer(
    initialState,
    on(ProductActions.loaded, (state, { list }) => list)
);

export { reducer as productReducer };