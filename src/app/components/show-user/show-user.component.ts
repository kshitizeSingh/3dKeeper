import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
import {AuthService} from 'src/app/service/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  @Output()  closeSidebar= new EventEmitter()
  loggedUser
  constructor(public auth:AuthService, private router: Router) { 
   
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

  navigate(path){
    this.router.navigate(["/landing/"+path])
    this.closeSidebar.emit(true)
  }

}
