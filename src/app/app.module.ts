import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LoginComponent,
    ShowUserComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    CardModule,
    SidebarModule,
    ButtonModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
