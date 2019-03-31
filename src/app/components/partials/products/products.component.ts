import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProductService} from 'src/app/services/product/product.service';
import {Product} from 'src/app/interfaces/product';
import {PageEvent} from '@angular/material';
import {AuthService} from 'src/app/services/auth/auth.service';
import {User} from '../../../interfaces/user';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  category: string;
  products: Product[] = [];
  search: string;
  url: string;
  role: string;
  user: User;

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  constructor(private router: Router, private productServices: ProductService, private authService: AuthService) {
  }

  ngOnInit() {
    this.user = this.authService.currentUser();
    this.buildProductsList(0);
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
      this.products = result.splice(from, this.pageSize);
    });
  }

  onPaginateChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.buildProductsList(this.pageSize * event.pageIndex);
  }

  searchByProducts() {
    this.buildProductsList(0);
  }

}
