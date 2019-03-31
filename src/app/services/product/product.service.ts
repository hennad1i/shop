import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from 'src/app/interfaces/product';
import {HttpClient} from '@angular/common/http';
import {url} from 'src/app/app.const';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsInBasket: Product[] = [];

  constructor(private http: HttpClient) {
  }

  getProducts(category: string = 'phones'): Observable<Product[]> {
    return this.http.get<Product[]>(`${url}/products/${category}`);
  }

  getProductsInBasket(): Product[] {
    return this.productsInBasket;
  }

  addProductToBasket(product: Product) {
    const findIndex = this.productsInBasket.findIndex(item => item.id === product.id);

    findIndex > -1
      ? this.productsInBasket[findIndex].basketCount++
      : this.productsInBasket.push(product);
  }
}
