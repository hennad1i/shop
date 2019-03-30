import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent as UserDashboardComponent} from 'src/app/components/user/dashboard/dashboard.component';
import {TraitorModule} from './traitor.module';

const routes: Routes = [
  {
    path: '',
    component: UserDashboardComponent
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
