import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent as UserDashboardComponent} from 'src/app/components/user/dashboard/dashboard.component';
import {TraitorModule} from './traitor.module';
import {ProductsComponent} from '../components/partials/products/products.component';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent,
    children: [
      {path: '', component: ProductsComponent},
      {path: 'notebooks', component: ProductsComponent},
      {path: 'monitors', component: ProductsComponent},
    ]
  }
];

@NgModule({
  declarations: [
    UserDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TraitorModule
  ]
})
export class UserModule {
}
