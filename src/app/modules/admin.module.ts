import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent as AdminDashboardComponent} from 'src/app/components/admin/dashboard/dashboard.component';
import {TraitorModule} from './traitor.module';
import { ProductsComponent } from '../components/partials/products/products.component';
import { StatisticComponent } from '../components/admin/statistic/statistic.component';
import { StatisticItemComponent } from '../components/admin/statistic/statistic-item/statistic-item.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      {path: '', component: ProductsComponent},
      {path: 'notebooks', component: ProductsComponent},
      {path: 'monitors', component: ProductsComponent},
    ]
  },
  {
    path: 'statistic',
    component: StatisticComponent,
    children: [
      {path: '', component: StatisticItemComponent},
      {path: 'notebooks', component: StatisticItemComponent},
      {path: 'monitors', component: StatisticItemComponent},
    ]
  }
];

@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TraitorModule
  ]
})
export class AdminModule {
}
