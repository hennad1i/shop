import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/interfaces/partials/product';
import { PageEvent } from '@angular/material';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  category: string = 'phones';
  products: Product[] = [];
  search: string;
  url: string;
  role: string;

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent;

  constructor(private router: Router, private productServices: ProductService, private authService: AuthService) {
  }

  ngOnInit() {
    this.buildProductsList(0);
  }

  buildProductsList(from: number){
    this.url = this.router.url.substring(1);
    this.category = !this.url.length ? 'phones' : this.url;

    this.productServices.getProducts(this.category).subscribe(result => {
      result = !!this.search ? result.filter(item => item.name.toLocaleLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1 ) : result;
      this.length = result.length;
      this.products = result.splice(from, this.pageSize)
    });
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }  

  onPaginateChange(event: PageEvent){
    this.pageSize = event.pageSize;
    this.buildProductsList(this.pageSize * event.pageIndex);
  }

  searchByProducts(){
    this.buildProductsList(0);
  }

}
