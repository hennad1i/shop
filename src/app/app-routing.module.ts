import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/landing/home/home.component';
import {SignInComponent} from './components/landing/sign-in/sign-in.component';
import {SignUpComponent} from './components/landing/sign-up/sign-up.component';
import {LayoutComponent} from './components/landing/layout/layout.component';
import { ProductsComponent } from './components/partials/products/products.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: HomeComponent, children: [
        {path: '', component: ProductsComponent},
        {path: 'notebooks', component: ProductsComponent},
        {path: 'monitors', component: ProductsComponent},
      ]},
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent}
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
