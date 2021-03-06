import {Injectable, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from 'src/app/interfaces/product';
import {HttpClient} from '@angular/common/http';
import {url} from 'src/app/app.const';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsInBasket: Product[] = [];
  getProductsInBasketEvent: EventEmitter<Product[]> = new EventEmitter();

  total = 0;
  getTotalEvent: EventEmitter<number> = new EventEmitter();

  updateProductsEvent: EventEmitter<number> = new EventEmitter();
  errorModalEvent: EventEmitter<number> = new EventEmitter();
  maxCountItem: EventEmitter<number> = new EventEmitter();

  constructor(private http: HttpClient) {
  }

  getProducts(category: string = 'phones'): Observable<Product[]> {
    return this.http.get<Product[]>(`${url}/products/${category}`);
  }

  getTotal(): number {
    this.sumTotal();
    return this.total;
  }

  addProductToBasket(product: Product) {
    const findIndex = this.productsInBasket.findIndex(item => item.id === product.id);

    findIndex > -1
      ? !(this.productsInBasket[findIndex].basketCount > 9) 
        ? this.productsInBasket[findIndex].basketCount++
        : this.maxCountItem.emit()
      : this.productsInBasket.push(product);

    this.sumTotal();

    this.getProductsInBasketEvent.emit(this.productsInBasket);
    this.getTotalEvent.emit(this.total);
  }

  sumTotal() {
    this.total = 0;
    this.productsInBasket.map(item => this.total += item.basketCount * item.price);
  }

  removeItemInBasket(id: number) {
    const findIndex = this.productsInBasket.findIndex(item => item.id === id);
    this.productsInBasket.splice(findIndex, 1);
  }

  clearBasket() {
    this.productsInBasket = [];
  }

  editProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${url}/product`, product);
  }

  updateProducts() {
    this.updateProductsEvent.emit();
  }

  errorModal() {
    this.errorModalEvent.emit();
  }
}
