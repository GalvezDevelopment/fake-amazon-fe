import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { ProductService } from '../../shared/services/product.service';
import * as ProductActions from './product.actions';

@Injectable()
export class ProductEffects {
    loadProducts$ = createEffect(() => this.action$.pipe(
        ofType(ProductActions.load),
        exhaustMap(inputs => this.productSrv.getProduct(inputs.pagination).pipe(
            map(products=> ProductActions.loaded({ list: products })))
        ))
    );

    constructor(private action$: Actions, private productSrv: ProductService) { }
}