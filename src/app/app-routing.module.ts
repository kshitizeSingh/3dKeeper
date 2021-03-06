import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { AuthGuard } from "./service/auth.guard";
import { LoginComponent } from "./components/login/login.component";
import {PrinterComponent} from './components/printer/printer.component';
import {FilamentsComponent} from './components/filaments/filaments.component';
import {ProductCatalogueComponent} from './components/product-catalogue/product-catalogue.component';
import {SalesComponent} from './components/sales/sales.component';
import {CreateBillComponent} from './components/create-bill/create-bill.component';
import {MySalesComponent} from './components/my-sales/my-sales.component';

const routes: Routes = [
  {
    path: "landing", component: MainComponent, canActivate: [AuthGuard],
    children: [
      {
        path: "printers",
        component: PrinterComponent,
      },
      {
        path: "filaments",
        component: FilamentsComponent,
      },
      {
        path: "catalogue",
        component: ProductCatalogueComponent,
      },
      {
        path: "sales",
        component: SalesComponent,
      },
      {
        path: "mysales",
        component: MySalesComponent,
      },
      {
        path: "generateBill",
        component: CreateBillComponent,
      },
      { path: "", redirectTo: "mysales", pathMatch: "full" },
      { path: "**", redirectTo: "mysales" },
    ],
  },
  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: "**", redirectTo: "landing", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
