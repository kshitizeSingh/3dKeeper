import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, public router:Router) {
  }

  ngOnInit() {
    this.auth.user$.subscribe(user=>{
      if(user){
        this.router.navigate(['/'])
      }
      // else{
      //   router.navigate(['/login'])
      // }
    })
  }

}
