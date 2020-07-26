import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/service/user.service';
import {DataShareService} from 'src/app/service/data-share.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  productList=[]
  printerList=[]
  fillamentList=[]

  selectedProduct
  selectedPrinter
  selectedFillament

  profit=10

  cost
  costProfit

  constructor(public userService:UserService, public dataShareService:DataShareService ) { }

  ngOnInit() {
    // let reqs = [];
    // reqs.push(this.userService.printers$.valueChanges())
    // reqs.push(this.userService.catalogue$.valueChanges())
    // reqs.push(this.userService.filament$.valueChanges())
    // console.log(reqs)
    // forkJoin(reqs).subscribe(
    //   success=>{
    //     console.log(success)
    //   }
    // )

    this.userService.printers$.valueChanges().subscribe(printers=>{
      this.printerList=this.dataShareService.getDropOption(printers,'printer')
      this.selectedPrinter=this.printerList[0].value
    })
    this.userService.catalogue$.valueChanges().subscribe(catalogues=>{
      this.productList=this.dataShareService.getDropOption(catalogues,'itemName')
      this.selectedProduct=this.productList[0].value
    })
    this.userService.filament$.valueChanges().subscribe(filaments=>{
      this.fillamentList=this.dataShareService.getDropOption(filaments,'color')
      this.selectedFillament=this.fillamentList[0].value
      // console.log(this.selectedFillament)
    })

  }

  calculateCost(){
    let cost=0
    let cost2=0
    if(this.selectedPrinter || this.selectedProduct || this.selectedFillament){
      cost=(this.selectedProduct.weight*this.selectedFillament.quotedPerGram)+(this.selectedProduct.timeRequired* this.selectedPrinter.ratePrHr)
      this.cost=cost
      this.costProfit=this.cost+cost*this.profit/100
      console.log(cost)
    }
    
  }
 

}
