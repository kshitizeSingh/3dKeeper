import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {UserService} from './service/user.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {AuthService} from './service/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Keeper';
  constructor(public auth: AuthService) {
    
  }
  // loggedUser
  // constructor(public auth: AngularFireAuth,private userService:UserService) {
  //   // this.auth.authState.pipe(
  //   //   switchMap(user=>{
  //   //     return this.getLoggedUserDetails(user.uid)
  //   //   })
  //   // )
    
  //   // subscribe(user=>{
  //   //   console.log(user)
  //   //   if(user){
  //   //     this.loggedUser=user
  //   //     this.getLoggedUserDetails(user.uid)
  //   //   }
  //   // },logout=>{
  //   //   console.log(logout)
  //   // })
  // }


  // login() {
  //   this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  // }

  // loginWithFacebook() {
  //   this.auth.signInWithPopup(new auth.FacebookAuthProvider());
  // }

  // logout() {
  //   this.auth.signOut();
  // }

  // getLoggedUserDetails(id){
  //   // id='JIIFJrTlKfCu34enrMiH'
  //     this.userService.getUser(id).snapshotChanges().subscribe(
  //       user=>{
  //         console.log(user)
          
  //       },
  //       error=>{
  //         this.createUser()
  //         console.log('no user found')
  //       }
  //     )
  // }

  // createUser(){
  //   console.log(this.auth.user)
  //   let user={
  //      userName:this.loggedUser['displayName'],
  //      loginUid:this.loggedUser['uid'],
  //      emailId:this.loggedUser['email'],
  //      photoURL:this.loggedUser['photoURL'],
  //      filaments:[],
  //       catalogue:[],
  //      printers:[],
  //      sales:[]
  //   }
  //   this.userService.addUserInCollection(this.loggedUser.uid,user)
  //   console.log(user)
  // }


}
