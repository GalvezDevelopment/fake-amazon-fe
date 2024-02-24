import { createSelector } from '@ngrx/store';
import { AppState } from '../store.module';

export const selectFeature = (state: AppState) => state.cart;

export const selectCart = createSelector(selectFeature, state => state);