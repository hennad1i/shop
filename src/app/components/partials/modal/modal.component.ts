import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Product } from 'src/app/interfaces/product';
import { FormControl, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  price: FormControl;
  errorMessage: string;
  minPrice: number = 1;
  maxPrice: number = 10000;
  product: Product;
  submitted: boolean = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private productService: ProductService) { 
    if(data.product){
      this.product = new Product(data.product);
      this.price = new FormControl(this.product.price, [Validators.required, Validators.min(this.minPrice), Validators.max(this.maxPrice)]);
    }
  }

  ngOnInit() {
  }

  isValid(price: FormControl){

    if (price.errors === null) {
      return false;
    }

    if(price.errors.required){
      this.errorMessage = 'You must enter correct value'
    }

    if(price.errors.min){
      this.errorMessage = 'Min value price ' + this.minPrice
    }

    if(price.errors.max){
      this.errorMessage = 'Max value price ' + this.maxPrice
    }

    return true;
  }

  editProduct(){
    if(this.price.valid){
      this.submitted = true;
      this.product.price = this.price.value;
      this.productService.editProduct(this.product).subscribe(
        result => {
          this.productService.updateProducts();
          this.submitted = false;
        },
        error => {
          this.productService.errorModal();
          this.submitted = false;
        }
      )
    }
  }
}
