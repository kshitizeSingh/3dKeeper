import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';  
//firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth'

import { environment } from '../environments/environment';
import {UserService} from './service/user.service';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';

//prime
import {CardModule} from 'primeng/card';
import {SidebarModule} from 'primeng/sidebar';
import {ButtonModule} from 'primeng/button';
import { ShowUserComponent } from './components/show-user/show-user.component';
import { PrinterComponent } from './components/printer/printer.component';
import { FilamentsComponent } from './components/filaments/filaments.component';
import { ProductCatalogueComponent } from './components/product-catalogue/product-catalogue.component';
import { SalesComponent } from './components/sales/sales.component';
import { CreateBillComponent } from './components/create-bill/create-bill.component';
import {TableModule} from 'primeng/table';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {DialogModule} from 'primeng/dialog';
import {AuthService} from './service/auth.service';

import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    ShowUserComponent,
    PrinterComponent,
    FilamentsComponent,
    ProductCatalogueComponent,
    SalesComponent,
    CreateBillComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AppRoutingModule,
    AccordionModule,
    TableModule,
    BrowserAnimationsModule,
    CardModule,
    SidebarModule,
    ScrollPanelModule,
    DialogModule,
    ButtonModule,
    FormsModule,
    DropdownModule
  ],
  providers: [AuthService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
