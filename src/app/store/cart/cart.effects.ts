import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, catchError, exhaustMap, map } from 'rxjs';
import { CartService } from '../../shared/services/cart.service';
import * as CartActions from './cart.actions';
import { UserService } from '../../shared/services/user.service';

@Injectable()
export class CartEffects {
    loadCart$ = createEffect(() => this.actions$.pipe(
        ofType(CartActions.load),
        exhaustMap(() => this.cartSrv.getProducts().pipe(
            map(list => CartActions.loaded({ list })),
            catchError(() => EMPTY)
        ))
    ));

    addProduct$ = createEffect(() => this.actions$.pipe(
        ofType(CartActions.addProduct),
        exhaustMap(action => this.cartSrv.addProduct(action.productId).pipe(
            map(() => CartActions.load())
        ))
    ));

    removeProduct$ = createEffect(() => this.actions$.pipe(
        ofType(CartActions.removeProduct),
        exhaustMap(action => this.cartSrv.removeProduct(action.productId).pipe(
            map(() => CartActions.load())
        ))
    ));

    payProducts$ = createEffect(() => this.actions$.pipe(
        ofType(CartActions.pay),
        exhaustMap(() => this.cartSrv.pay(this.userSrv.getUserId()).pipe(
            map(() => CartActions.load()))
        ))
    );

    constructor(private actions$: Actions, private cartSrv: CartService, private userSrv: UserService) { }
}