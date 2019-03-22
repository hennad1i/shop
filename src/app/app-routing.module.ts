import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/landing/home/home.component';
import {SignInComponent} from './components/landing/sign-in/sign-in.component';
import {SignUpComponent} from './components/landing/sign-up/sign-up.component';
import {LayoutComponent} from './components/landing/layout/layout.component';
import { ProductsComponent } from './components/partials/products/products.component';
import { DashboardComponent as UserDashboardComponent }  from './components/user/dashboard/dashboard.component';
import { DashboardComponent as AdminDashboardComponent }  from './components/admin/dashboard/dashboard.component';

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
  {path: 'user', component: UserDashboardComponent},
  {path: 'admin', component: AdminDashboardComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
