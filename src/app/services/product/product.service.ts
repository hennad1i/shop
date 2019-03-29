import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/interfaces/partials/product';
import { HttpClient } from '@angular/common/http';
import { url } from 'src/app/app.const';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(category: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${url}/products/${category}`);
  }
}
