import { Component, OnInit } from '@angular/core';
import {trigger, state, style, transition, animate} from '@angular/animations';
import {AuthService} from 'src/app/service/auth.service';
import {UserService} from 'src/app/service/user.service';

@Component({
  selector: 'app-printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.css'],
  animations: [
    trigger('rowExpansionTrigger', [
        state('void', style({
            transform: 'translateX(-10%)',
            opacity: 0
        })),
        state('active', style({
            transform: 'translateX(0)',
            opacity: 1
        })),
        transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
    ])
]
})
export class PrinterComponent implements OnInit {

  cols
  printerList=[]
  printerDisplay

  newPrinter={
    printerName:'',
    ecPerHr:'',
    ratePerHr:''
  }

  constructor(public auth:AuthService, public userService:UserService) { }

  ngOnInit() {
    console.log(this.auth.user$)
    this.userService.printers$.valueChanges().subscribe(printers=>{
      console.log(printers)
      this.printerList=printers
    })
    // this.auth.user$.subscribe(user=>{
    //   console.log(user)
    //   this.printerList=user.printers
    // })
    this.cols = [
      { field: 'printer', header: 'Printer' },
      { field: 'ecPerHr', header: 'EC/HR' },
      { field: 'ratePrHr', header: 'Rate/HR' },
  ];
  }

  addPrinter(){
    let request={
      printer:this.newPrinter.printerName,
      ecPerHr:this.newPrinter.ecPerHr,
      ratePrHr:this.newPrinter.ratePerHr
    }
    this.printerList.push(request
      )
      this.printerDisplay=false
    // this.userService.addPrinterToStore(request)
  }

}