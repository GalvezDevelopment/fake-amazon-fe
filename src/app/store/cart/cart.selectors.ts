import { createSelector } from '@ngrx/store';
import { AppState } from '../store.module';

export const selectFeature = (state: AppState) => state.cart;

export const selectCart = createSelector(selectFeature, state => state);

export const selectCartCount = createSelector(selectFeature, state => state.length);
export const selectCartQuantity = createSelector(selectFeature, state => state.reduce((prev, curr) => prev + curr.price, 0));