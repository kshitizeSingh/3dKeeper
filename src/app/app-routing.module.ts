import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {AuthGuard} from './service/auth.guard';
import {LoginComponent} from './components/login/login.component';

const routes: Routes = [
  {path:'landing',component:MainComponent,canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent},  
  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: "**", redirectTo: "landing", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
