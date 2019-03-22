import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { Product } from 'src/app/interfaces/partials/product';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  category: string = 'phones';
  products: any[] = [];

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  pageEvent: PageEvent;

  constructor(private router: Router, private productServices: ProductService) {
    this.buildProductsList(0);
  }

  ngOnInit() {
  }

  buildProductsList(from: number){
    this.category = this.router.url === '/' 
      ? 'posts' 
      : this.router.url === '/notebooks' 
        ? 'albums' : 'todos'; 

    this.productServices.getProducts(this.category).subscribe(result => {
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

}
