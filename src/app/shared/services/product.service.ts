import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  getProduct(start: number, end: number): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`http://localhost:3000/products?start=${start}&end=${end}`);
  }
}
