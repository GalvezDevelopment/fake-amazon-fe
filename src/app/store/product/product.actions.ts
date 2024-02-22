import {createAction, props} from '@ngrx/store';
import { Product } from '../../shared/models/product';

export const load = createAction('[Product Component] Load', props<{ pagination: number }>());
export const loaded = createAction('[Product Component] Loaded', props<{ list: Product[] }>());