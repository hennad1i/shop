import {Component, OnInit} from '@angular/core';
import {Product} from '../../../interfaces/product';
import {ProductService} from '../../../services/product/product.service';
import {ModalService} from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  basketItems: Product[] = [];
  minItems = 1;
  maxItems = 10;
  total = 0;

  constructor(private productService: ProductService, private modalService: ModalService) {
    productService.getProductsInBasketEvent.subscribe(result => this.basketItems = result);
    productService.getTotalEvent.subscribe(result => this.total = result);
  }

  ngOnInit() {
  }

  changeInput(value, item: Product) {
    setTimeout(() => {
      if (!value && value < 1) {
        item.basketCount = this.minItems;
      } 
  
      if(item.count < value) {
        item.basketCount = item.count;
      }
  
      if(value > this.maxItems) {
        item.basketCount = this.maxItems;
      }

      this.total = this.productService.getTotal();
    }, 0)
  }

  removeItem(id: number){
    this.productService.removeItemInBasket(id);
    this.total = this.productService.getTotal();
  }

  makeAnOrder(){
    this.productService.clearBasket();
    this.basketItems = [];
    this.modalService.openOrderModal();
  }

}
