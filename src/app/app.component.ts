import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {UserService} from './service/user.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import {AuthService} from './service/auth.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Keeper';
  constructor(public auth: AuthService,public userService:UserService,public router:Router) {
    auth.user$.subscribe(user=>{
      // if(user){
      //   router.navigate(['/'])
      // }
      // else{
      //   router.navigate(['/login'])
      // }
    })
  }
  

}
