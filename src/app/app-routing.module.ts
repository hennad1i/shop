import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/landing/home/home.component';
import {SignInComponent} from './components/landing/sign-in/sign-in.component';
import {SignUpComponent} from './components/landing/sign-up/sign-up.component';
import {LayoutComponent} from './components/landing/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'sign-in', component: SignInComponent},
      {path: 'sign-up', component: SignUpComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
