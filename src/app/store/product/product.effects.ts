import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { ProductService } from '../../shared/services/product.service';
import * as ProductActions from './product.actions';
import * as CartActions from '../cart/cart.actions';

@Injectable()
export class ProductEffects {
    loadProducts$ = createEffect(() => this.action$.pipe(
        ofType(ProductActions.load),
        exhaustMap(inputs => this.productSrv.getProduct(inputs.start, inputs.end).pipe(
            map(products => ProductActions.loaded({ list: products })))
        ))
    );

    initializeCart$ = createEffect(() => this.action$.pipe(
        ofType(ProductActions.load),
        map(() => CartActions.load()))
    );

    constructor(private action$: Actions, private productSrv: ProductService) { }
}