import { Component, OnInit } from '@angular/core';
import {map} from 'rxjs/operators';
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
    this.userService.filament$.snapshotChanges()
    .pipe(
      map((val:Array<any>) => {
        console.log(val)
        return val.map(a=>{
          const data = a.payload.doc.data() ;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      }))
      .subscribe(filaments=>{
      console.log(filaments)
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

  updateFilament(value){
    console.log(value)
    for(let key in value ){
      if(key.includes('Old')){
        console.log(key,'in')
        delete value[key]
      }
    }
    console.log(value)
    this.userService.updateFilament(value.id,value)
  }

  delete(id){
    this.userService.deleteFilament(id)
  }

  backup(obj){
    for(let key in obj ){
      obj[key+'Old']=obj[key]
    }
    
  }

  restoreBackup(obj){
    for(let key in obj ){
      obj[key]= obj[key+'Old']
    }
    for(let key in obj ){
      if(key.includes('Old')){
        console.log(key,'in')
        delete obj[key]
      }
    }
    console.log(obj)
  }

}

export class Filament{
  color;
  type;
  spool;
  breakevenPerGram;
  quotedPerGram
}
