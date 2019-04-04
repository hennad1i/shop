import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from 'src/app/services/product/product.service';
import {Product} from 'src/app/interfaces/product';
import {PageEvent} from '@angular/material';
import {AuthService} from 'src/app/services/auth/auth.service';
import {User} from '../../../interfaces/user';
import { ModalService } from 'src/app/services/modal/modal.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  category: string;
  products: Product[] = [];
  productsAll: Product[] = [];
  search: string;
  url: string;
  role: string;
  user: User;
  resizeTimer;

  length;
  pageSize;
  pageSizeOptions: number[] = [];
  pageIndex: number = 0;
  cols: number;

  constructor(private router: Router, private productServices: ProductService, private authService: AuthService, private modalService: ModalService) {
  }

  ngOnInit() {
    this.user = this.authService.currentUser();
    this.responsive(window.innerWidth);

    this.productServices.updateProductsEvent.subscribe(() => {
      this.buildProductsList(this.pageSize * this.pageIndex);
      this.modalService.closeModal();
      this.modalService.openSuccessModal();
    })

    this.productServices.errorModalEvent.subscribe(() => {
      this.modalService.closeModal();
      this.modalService.openErrorModal('An error has occurred. Please try again later');
    })
  }

  buildProductsList(from: number = 0) {

    if (!this.user) {
      this.url = this.router.url.substring(1);
      this.category = !this.url.length ? undefined : this.url;
    } else {
      const split = this.router.url.split('/');
      this.category = split.length <= 2 ? undefined : split[split.length - 1];
    }

    this.productServices.getProducts(this.category).subscribe(result => {
      result = !!this.search ? result.filter(item => item.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1) : result;
      this.length = result.length;
      this.productsAll = result;
      this.products = result.splice(from, this.pageSize);
    }, 
    error => this.modalService.openErrorModal('An error has occurred. Please try again later'));
  }

  onPaginateChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.buildProductsList(this.pageSize * event.pageIndex);
  }

  searchByProducts() {
    this.buildProductsList(0);
  }

  onResize(event) {
    this.responsive(event.target.innerWidth)
  }

  responsive(width: number) {

    clearTimeout(this.resizeTimer);
    this.resizeTimer = setTimeout(() => {
      if(width <= 500){
        this.cols = 1;
      }
  
      if((500 < width) && (width <= 1024)){
        this.cols = 2;
      }
  
      if((1024 < width) && (width <= 1440)){
        this.cols = 3;
      }
  
      if(width > 1440){
        this.cols = 5;
      }
  
      this.pageSize = this.cols * 2;
      this.pageSizeOptions = [this.pageSize, this.pageSize * 2, this.pageSize * 5];

      this.buildProductsList(this.pageSize * this.pageIndex);
    }, 500);
    
  }

}
