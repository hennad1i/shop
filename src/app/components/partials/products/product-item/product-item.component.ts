import {Component, OnInit, Input} from '@angular/core';
import {Product} from 'src/app/interfaces/product';
import {AuthService} from '../../../../services/auth/auth.service';
import {ProductService} from '../../../../services/product/product.service';
import {ModalService} from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Input() role: string;

  constructor(private authService: AuthService, private productService: ProductService, private modalServise: ModalService) {
  }

  ngOnInit() {
    this.role = this.authService.currentUser() ? this.authService.currentUser().role : undefined;
  }

  addProductToBasket(product: Product) {
    this.productService.addProductToBasket({
      id: product.id,
      price: product.price,
      count: product.count,
      name: product.name,
      basketCount: 1
    });
  }

  openSigninModal() {
    this.modalServise.openSigninModal();
  }

  openEditModal(product: Product){
    this.modalServise.openEditModal(product);
  }
}
