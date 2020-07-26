import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';
import { auth } from 'firebase/app';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$:Observable<any>
  printers$
  catalogue$
  sales$
  filament$


  constructor(public auth: AngularFireAuth, private afs: AngularFirestore) {
    this.user$=this.auth.authState.pipe(
      switchMap(user=>{
        if(user){
          this.printers$=afs.doc<any>('users/'+user.uid).collection<any>('printers');
          this.catalogue$=afs.doc<any>('users/'+user.uid).collection<any>('catalogues');
          this.sales$=afs.doc<any>('users/'+user.uid).collection<any>('sales');
          this.filament$=afs.doc<any>('users/'+user.uid).collection<any>('filament');
          return afs.doc<any>(`users/${user.uid}`).valueChanges()
        }else{
          return of(null)
        }
      })
    )

    // this.printers$=this.auth.authState.pipe(
    //   switchMap(user=>{
    //     if(user){
    //       return afs.doc<any>(`users/${user.uid}`).collection<any>('printers')
    //     }else{
    //       return of(null)
    //     }
    //   })
    // )

  }

  async googleSingIn(){
    const provider=new auth.GoogleAuthProvider()
    const credentials= await this.auth.signInWithPopup(provider);
    return this.updateUserData(credentials.user)
  }

  async facebookSingIn(){
    const provider=new auth.FacebookAuthProvider()
    const credentials= await this.auth.signInWithPopup(provider);
    return this.updateUserData(credentials.user)
  }
  
  logout() {
    this.auth.signOut();
  }

  private updateUserData(user){
    const userRef: AngularFirestoreDocument<any>=this.afs.doc(`users/${user.uid}`)
    const data={
      uid:user.uid,
      email:user.email,
      displayName:user.displayName,
      photoUrl:user.photoURL,
      userLicence:'trial'
      // filaments:[],
      // catalogue:[],
      // printers:[],
      // sales:[],
      // userLicence:{}
    }

    return userRef.set(data,{merge:true})
  }
}
