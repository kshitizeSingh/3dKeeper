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
  // :Observable<any>
  userDoc$
  constructor( private afs: AngularFirestore, public auth:AuthService) { 
    this.auth.user$.subscribe(user=>{
      console.log('user service formed')
      this.printers$=afs.doc<any>('users/'+user.uid).collection<any>('printers');
      // this.printers$=this.userDoc$.collection<any>('printers')
    })
    // this.printers$=this.auth.user$.pipe(
    //   switchMap()
    // )
  }

  getUser(userId){
    return this.afs.doc<any>('users/'+userId);
  }

  addUserInCollection(uid,user){
    console.log(uid,user)
    let newUser=JSON.parse(JSON.stringify(user))
    return this.afs.collection('users').doc(uid).set(newUser);
    // return this.db.collection("users").add(user);
  }

  addPrinterToStore(printerObj){
    console.log('new printer req',printerObj)
    this.printers$.add(printerObj)
  }

  getPrinters(){

  }

}
