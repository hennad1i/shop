import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/partials/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  @Input() role: string;

  constructor() { }

  ngOnInit() {
  }

}
