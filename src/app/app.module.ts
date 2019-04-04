import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/landing/home/home.component';
import {SignInComponent} from './components/landing/sign-in/sign-in.component';
import {SignUpComponent} from './components/landing/sign-up/sign-up.component';
import {LayoutComponent} from './components/landing/layout/layout.component';
import {FormComponent} from './components/partials/form/form.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {TokenInterceptor} from './token.interceptor';
import {TraitorModule} from './modules/traitor.module';
import {UseComponent} from './components/landing/use/use.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    SignUpComponent,
    LayoutComponent,
    FormComponent,
    UseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TraitorModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
