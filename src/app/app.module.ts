import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/material/material.module';
import {MenuComponent} from './components/landing/menu/menu.component';
import {HomeComponent} from './components/landing/home/home.component';
import {SignInComponent} from './components/landing/sign-in/sign-in.component';
import {SignUpComponent} from './components/landing/sign-up/sign-up.component';
import {LayoutComponent} from './components/landing/layout/layout.component';
import {FormComponent} from './components/partials/form/form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CatalogComponent } from './components/partials/catalog/catalog.component';
import { ProductsComponent } from './components/partials/products/products.component';
import { ProductItemComponent } from './components/partials/products/product-item/product-item.component';
import { DashboardComponent } from './components/user/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    LayoutComponent,
    FormComponent,
    CatalogComponent,
    ProductsComponent,
    ProductItemComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
