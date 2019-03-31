import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../interfaces/user';
import {Product} from '../../../interfaces/product';
import {ProductService} from '../../../services/product/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() user: User;
  basketItems: Product[] = [];
  total = 0;

  constructor(private productService: ProductService) {
  }


  ngOnInit() {
    this.basketItems = this.productService.getProductsInBasket();
  }

  getRole() {
    if (this.user) {
      return this.user.role;
    }
    return null;
  }

  changeInput(value, item: Product) {
    console.log('here');
    if (!value) {
      item.basketCount = 1;
    }
  }

  getTotal() {
    console.log('here');
    this.basketItems.map(item => {
      this.total += item.basketCount * item.price;
    });
    return this.total;
  }

}
