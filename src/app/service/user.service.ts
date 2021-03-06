import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { switchMap } from "rxjs/operators";
import { MessageService } from "primeng/api";
import { Printer } from "../Models/printer";
import { Fillament } from "../Models/fillament";

@Injectable({
  providedIn: "root",
})
export class UserService {
  printers$;
  catalogue$;
  sales$;
  filament$;
  userId;
  // :Observable<any>
  userDoc$;
  constructor(
    private afs: AngularFirestore,
    public auth: AuthService,
    private messageService: MessageService
  ) {
    this.auth.user$.subscribe((user) => {
      if (user) {
        this.userId = user.uid;
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

  // Filament crud        ////////////////////////////////////////////////////////////////////

  addPrinterToStore(printerObj) {
    try {
      this.printers$.add(printerObj);
      console.log("pass");
      this.messageService.add({
        severity: "success",
        summary: "Success Message",
        detail: "Printer Added",
      });
      return true;
    } catch (err) {
      this.messageService.add({
        severity: "error",
        summary: "Error Message",
        detail: "Unable to Add Printer",
      });
      console.log("fail", err);
      return false;
    }
  }

  updatePrinter(id, obj) {
    try {
      console.log(this.userId);
      let updateObj: Printer = { ...obj };
      // delete updateObj.id
      console.log(updateObj);
      this.afs.doc(`users/${this.userId}/printers/${id}`).update(updateObj);
      this.messageService.add({
        severity: "success",
        summary: "Success Message",
        detail: "Printer Updated",
      });
      // console.log("pass");
    } catch (err) {
      this.messageService.add({
        severity: "error",
        summary: "Error Message",
        detail: "Unable to Update Printer",
      });
      console.log("error", err);
    }
  }

  deletePrinter(id) {
    try {
      this.afs.doc(`users/${this.userId}/printers/${id}`).delete();
      this.messageService.add({
        severity: "success",
        summary: "Success Message",
        detail: "Printer Deleted",
      });
    } catch (err) {
      this.messageService.add({
        severity: "error",
        summary: "Error Message",
        detail: "Unable to delete Printer",
      });
      console.log("error", err);
    }
  }

  // Filament crud        ////////////////////////////////////////////////////////////////////
  addFillament(filamentObj) {
    try {
      this.filament$.add(filamentObj);
      console.log("pass");
      this.messageService.add({
        severity: "success",
        summary: "Success Message",
        detail: "Fillament added",
      });
      return true;
    } catch (err) {
      this.messageService.add({
        severity: "error",
        summary: "Error Message",
        detail: "Unable to add Fillament",
      });
      console.log("fail", err);
      return false;
    }
  }

  updateFilament(id, obj) {
    try {
      console.log(this.userId);
      let updateObj: Fillament = { ...obj };
      // delete updateObj.id
      console.log(updateObj);
      this.afs.doc(`users/${this.userId}/filament/${id}`).update(updateObj);
      this.messageService.add({
        severity: "success",
        summary: "Success Message",
        detail: "Printer Filament",
      });
      // console.log("pass");
    } catch (err) {
      this.messageService.add({
        severity: "error",
        summary: "Error Message",
        detail: "Unable to Update Filament",
      });
      console.log("error", err);
    }
  }

  deleteFilament(id) {
    try {
      this.afs.doc(`users/${this.userId}/filament/${id}`).delete();
      this.messageService.add({
        severity: "success",
        summary: "Success Message",
        detail: "Filament Deleted",
      });
    } catch (err) {
      this.messageService.add({
        severity: "error",
        summary: "Error Message",
        detail: "Unable to delete Filament",
      });
      console.log("error", err);
    }
  }

  // Sales crud        ////////////////////////////////////////////////////////////////////

  addSale(saleObj) {
    try {
      console.log(saleObj);
      this.sales$.add(saleObj);
      this.messageService.add({
        severity: "success",
        summary: "Success Message",
        detail: "Order submitted",
      });
      return true;
    } catch (err) {
      this.messageService.add({
        severity: "error",
        summary: "Error Message",
        detail: "Unable to add sale",
      });
      console.log("fail", err);
      return false;
    }
  }

  // Product crud        ////////////////////////////////////////////////////////////////////

  addProduct(productObj) {
    try {
      this.catalogue$.add(productObj);
      this.messageService.add({
        severity: "success",
        summary: "Success Message",
        detail: "Product added",
      });
      console.log("pass");
      return true;
    } catch (err) {
      this.messageService.add({
        severity: "error",
        summary: "Error Message",
        detail: "Unable to add printer",
      });
      console.log("fail", err);
      return false;
    }
  }

  updateProduct(id, obj) {
    try {
      console.log(this.userId);
      let updateObj: Fillament = { ...obj };
      // delete updateObj.id
      console.log(updateObj);
      this.afs.doc(`users/${this.userId}/catalogues/${id}`).update(updateObj);
      this.messageService.add({
        severity: "success",
        summary: "Success Message",
        detail: "Product Updated",
      });
      // console.log("pass");
    } catch (err) {
      this.messageService.add({
        severity: "error",
        summary: "Error Message",
        detail: "Unable to Update Product",
      });
      console.log("error", err);
    }
  }

  deleteProduct(id) {
    try {
      this.afs.doc(`users/${this.userId}/catalogues/${id}`).delete();
      this.messageService.add({
        severity: "success",
        summary: "Success Message",
        detail: "Product Deleted",
      });
    } catch (err) {
      this.messageService.add({
        severity: "error",
        summary: "Error Message",
        detail: "Unable to delete Product",
      });
      console.log("error", err);
    }
  }
}
