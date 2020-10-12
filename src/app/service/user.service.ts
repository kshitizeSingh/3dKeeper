import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { switchMap } from "rxjs/operators";
import {MessageService} from 'primeng/api';

@Injectable({
  providedIn: "root",
})
export class UserService {
  printers$;
  catalogue$;
  sales$;
  filament$;
  userId
  // :Observable<any>
  userDoc$;
  constructor(private afs: AngularFirestore, public auth: AuthService,private messageService: MessageService) {
    this.auth.user$.subscribe((user) => {
      if (user) {
        this.userId=user.uid
        this.printers$ = afs
          .doc<any>("users/" + user.uid)
          .collection<any>("printers");
        this.catalogue$ = afs
          .doc<any>("users/" + user.uid)
          .collection<any>("catalogues");
        this.sales$ = afs
          .doc<any>("users/" + user.uid)
          .collection<any>("sales");
        this.filament$ = afs
          .doc<any>("users/" + user.uid)
          .collection<any>("filament");
      }
    });
  }

  getUser(userId) {
    return this.afs.doc<any>("users/" + userId);
  }


  addPrinterToStore(printerObj) {
    try {
      this.printers$.add(printerObj);
      console.log("pass");
      return true;
    } catch(err) {
      console.log("fail",err);
      return false;
    }
  }
  
  updatePrinter(id,obj){
    try{
      console.log(this.userId)
      delete obj.id
      this.afs.doc(`users/${this.userId}/printers/${id}`).update(obj);
      console.log("pass");
    }catch(err){
      console.log("error",err)
    }
  }

  addFillament(filamentObj) {
    try {
      this.filament$.add(filamentObj);
      console.log("pass");
      this.messageService.add({severity:'success', summary: 'Success Message', detail:'Fillament added'})
      return true;
    } catch(err) {
      this.messageService.add({severity:'error', summary: 'Error Message', detail:'Unable to add Fillament'});
      console.log("fail",err);
      return false;
    }
    
  }

  addSale(saleObj) {
    try {
      console.log(saleObj);
      this.sales$.add(saleObj);
      this.messageService.add({severity:'success', summary: 'Success Message', detail:'Order submitted'});
      return true;
    } catch(err) {
      this.messageService.add({severity:'error', summary: 'Error Message', detail:'Unable to add sale'});
      console.log("fail",err);
      return false;
    }
  }

  addProduct(productObj) {
    try {
      this.catalogue$.add(productObj);
      this.messageService.add({severity:'success', summary: 'Success Message', detail:'Product added'});
      console.log("pass");
      return true;
    } catch(err) {
      this.messageService.add({severity:'error', summary: 'Error Message', detail:'Unable to add printer'});
      console.log("fail",err);
      return false;
    }
  }
}
