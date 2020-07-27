import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/service/auth.service';
import {UserService} from 'src/app/service/user.service';

@Component({
  selector: 'app-filaments',
  templateUrl: './filaments.component.html',
  styleUrls: ['./filaments.component.css']
})
export class FilamentsComponent implements OnInit {

  filamentList=[]
  addFilamentDisplay
  cols=[
    { field: 'color', header: 'Color' },
    { field: 'type', header: 'Type' },
    { field: 'spool', header: 'spool' },
    ];
  filament


  constructor(public auth:AuthService, public userService:UserService) { }

  ngOnInit() {
    // this.cols = \
    this.filament=new Filament
    console.log(this.auth.user$)
    this.userService.filament$.valueChanges().subscribe(filaments=>{
      console.log(filaments)
      filaments.forEach(ele=>{
        ele['uid']=ele.color+'-'+ele.type
      })
      this.filamentList=filaments
    })
  }

  addFilament(){
    let request={
      color:this.filament.color,
      spool:this.filament.spool,
      type:this.filament.type,
      breakevenPerGram:this.filament.breakevenPerGram,
      quotedPerGram:this.filament.quotedPerGram,
    }
    this.userService.addFillament(request)
    this.nullifyFilament()
    this.addFilamentDisplay=false

  }

  nullifyFilament(){
    this.filament.color=null
    this.filament.type=null
    this.filament.spool=null
    this.filament.breakevenPerGram=null
    this.filament.quotedPerGram=null

  }

}

export class Filament{
  color;
  type;
  spool;
  breakevenPerGram;
  quotedPerGram
}
