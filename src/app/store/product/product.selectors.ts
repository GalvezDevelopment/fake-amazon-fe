import { createSelector } from '@ngrx/store';
import { AppState } from '../store.module';

const selectFeature = (state: AppState) => state.products;

export const selectProducts = createSelector(selectFeature, state => state);