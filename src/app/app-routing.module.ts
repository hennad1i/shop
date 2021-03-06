import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/landing/home/home.component';
import {SignInComponent} from './components/landing/sign-in/sign-in.component';
import {SignUpComponent} from './components/landing/sign-up/sign-up.component';
import {LayoutComponent} from './components/landing/layout/layout.component';
import {ProductsComponent} from './components/partials/products/products.component';
import {AuthGuard} from './guards/auth.guard';
import { UseComponent } from './components/landing/use/use.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: '', component: HomeComponent, children: [
          {path: '', component: ProductsComponent},
          {path: 'notebooks', component: ProductsComponent},
          {path: 'monitors', component: ProductsComponent},
        ]
      },
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'use', component: UseComponent},
    ], canActivate: [AuthGuard]
  },
  {path: 'user', loadChildren: './modules/user.module#UserModule', canActivate: [AuthGuard]},
  {path: 'admin', loadChildren: './modules/admin.module#AdminModule', canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
