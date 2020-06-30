import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/service/auth.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  loggedUser
  constructor(public auth:AuthService) { 
   
  }

  ngOnInit() {
    console.time('load')
    this.auth.user$.subscribe(
      user=>{
        console.timeEnd('load')
        this.loggedUser=user
      }
    )
  }

}
