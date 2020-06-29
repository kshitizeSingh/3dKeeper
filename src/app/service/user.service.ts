import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private afs: AngularFirestore) { }

  getUser(userId){
    return this.afs.doc<any>('users/'+userId);
  }

  addUserInCollection(uid,user){
    console.log(uid,user)
    let newUser=JSON.parse(JSON.stringify(user))
    return this.afs.collection('users').doc(uid).set(newUser);
    // return this.db.collection("users").add(user);
  }

}
