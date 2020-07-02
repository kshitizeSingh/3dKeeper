import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {AuthService} from './auth.service';
import {switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  printers$
  catalogue$
  sales$
  filament$
  // :Observable<any>
  userDoc$
  constructor( private afs: AngularFirestore, public auth:AuthService) { 
    this.auth.user$.subscribe(user=>{
      console.log('user service formed')
      this.printers$=afs.doc<any>('users/'+user.uid).collection<any>('printers');
      this.catalogue$=afs.doc<any>('users/'+user.uid).collection<any>('catalogues');
      this.sales$=afs.doc<any>('users/'+user.uid).collection<any>('sales');
      this.filament$=afs.doc<any>('users/'+user.uid).collection<any>('filament');
    })
   
  }

  getUser(userId){
    return this.afs.doc<any>('users/'+userId);
  }

  addPrinterToStore(printerObj){
    console.log('new printer req',printerObj)
    this.printers$.add(printerObj)
  }

  addFillament(filamentObj){
    this.filament$.add(filamentObj)
  }

  addSale(saleObj){
    this.sales$.add(saleObj)
  }

  addProduct(productObj){
    this.catalogue$.add(productObj)
  }



}
