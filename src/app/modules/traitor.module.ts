import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {CatalogComponent} from '../components/partials/catalog/catalog.component';
import {MenuComponent} from '../components/partials/menu/menu.component';
import {ProductsComponent} from '../components/partials/products/products.component';
import {ProductItemComponent} from '../components/partials/products/product-item/product-item.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CatalogComponent,
    MenuComponent,
    ProductsComponent,
    ProductItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    CatalogComponent,
    MenuComponent,
    ProductsComponent,
    ProductItemComponent,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TraitorModule {
}
