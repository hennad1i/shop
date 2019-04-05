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
  modalSubscribe;
  endTimeout;
  errorMessage;

  constructor(private productService: ProductService, private modalService: ModalService) {
    productService.getProductsInBasketEvent.subscribe(result => this.basketItems = result);
    productService.getTotalEvent.subscribe(result => this.total = result);
    productService.maxCountItem.subscribe(() => modalService.openErrorModal('Max count items - 10'));
  }

  ngOnInit() {
  }

  changeInput(value, item: Product) {
    setTimeout(() => {
      this.errorMessage = '';
      if (!value && value < 1) {
        item.basketCount = this.minItems;
        this.errorMessage = 'Min count items 1';
      }

      if (value > this.maxItems) {
        item.basketCount = this.maxItems;
        this.errorMessage = 'Max count items 10';
      }

      this.total = this.productService.getTotal();
      
      if(this.errorMessage.length){
        clearTimeout(this.endTimeout);
        this.endTimeout = setTimeout(() => this.modalService.openErrorModal(this.errorMessage), 100);
      }
    }, 0);
  }

  removeItem(id: number) {
    this.productService.removeItemInBasket(id);
    this.total = this.productService.getTotal();
  }

  makeAnOrder() {
    this.productService.clearBasket();
    this.basketItems = [];
    this.modalService.openOrderModal();
  }

}
