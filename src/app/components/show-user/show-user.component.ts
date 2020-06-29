import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/service/auth.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  loggedUser
  constructor(private auth:AuthService) { 
    auth.user$.subscribe(
      user=>{
        this.loggedUser=user
      }
    )
  }

  ngOnInit() {
  }

}
