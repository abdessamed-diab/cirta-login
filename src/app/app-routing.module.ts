import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
    {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    {path: '',   component: LoginComponent},
    {path: '**', component: LoginComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
