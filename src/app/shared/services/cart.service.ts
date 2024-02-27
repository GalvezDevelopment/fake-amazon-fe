import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  addProduct(productId: string): Observable<void> {
    return this.httpClient.post<void>('http://localhost:3000/cart', { productId: productId });
  }

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/cart/');
  }

  removeProduct(productId: string): Observable<void> {
    return this.httpClient.delete<void>('http://localhost:3000/cart/' + productId);
  }

  pay(userId: string): Observable<void> {
    return this.httpClient.post<void>('http://localhost:3000/cart/checkout', { userId });
  }
}
