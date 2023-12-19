import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {UpgradeComponent} from "./upgrade/upgrade.component";
import {LoginComponent} from "./login/login.component";
import {ForgotpassComponent} from "./forgotpass/forgotpass.component";
import {UsermanagementComponent} from "./management/usermanagement/usermanagement.component";
import {EmailokComponent} from "./forgotpass/emailok/emailok.component";
import {BrandsComponent} from "./management/brands/brands.component";
import {AuthGuard} from "./helpers/auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {path: 'login', component: LoginComponent},
  {path: 'emailok', component: EmailokComponent},
  {path: 'forgotpass', component: ForgotpassComponent},


  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
      }]
  },
  /* {
     path: '**',
     redirectTo: ''
   },*/
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [],
})
export class AppRoutingModule {
}
