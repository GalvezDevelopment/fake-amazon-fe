import { createAction, props } from '@ngrx/store';
import { Product } from '../../shared/models/product';

export const load = createAction('[Cart Component] Load');
export const loaded = createAction('[Cart Component] Loaded', props<{ list: Product[] }>());
export const addProduct = createAction('[Cart Component] Add Product', props<{ productId: Product['id'] }>());
export const removeProduct = createAction('[Cart Component] Remove Product', props<{ productId: Product['id'] }>());
export const removeAll = createAction('[Cart Component] Remove All Products');
export const pay = createAction('[Cart Component] Pay Cart Products');