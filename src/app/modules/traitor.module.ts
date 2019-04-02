import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from './material.module';
import {CatalogComponent} from '../components/partials/catalog/catalog.component';
import {MenuComponent} from '../components/partials/menu/menu.component';
import {ProductsComponent} from '../components/partials/products/products.component';
import {ProductItemComponent} from '../components/partials/products/product-item/product-item.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BasketComponent} from '../components/partials/basket/basket.component';
import {ModalComponent} from '../components/partials/modal/modal.component';
import { StatisticComponent } from '../components/admin/statistic/statistic.component';
import { StatisticItemComponent } from '../components/admin/statistic/statistic-item/statistic-item.component';

@NgModule({
  declarations: [
    CatalogComponent,
    MenuComponent,
    ProductsComponent,
    ProductItemComponent,
    BasketComponent,
    ModalComponent,
    StatisticComponent,
    StatisticItemComponent
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
    ReactiveFormsModule,
    BasketComponent,
    ModalComponent,
    StatisticComponent,
    StatisticItemComponent
  ],
  entryComponents: [ModalComponent]
})
export class TraitorModule {
}
