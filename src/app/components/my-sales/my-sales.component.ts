import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/service/user.service';

@Component({
  selector: 'app-my-sales',
  templateUrl: './my-sales.component.html',
  styleUrls: ['./my-sales.component.css']
})
export class MySalesComponent implements OnInit {

  mySalesList

  cols=[
    { field: 'cusromerName', header: 'Cust Name' },
    { field: 'product', header: 'Product' },
    { field: 'dileveryDate', header: 'Dilevery' },
    // { field: 'quotedCost', header: 'Cost' },

    ];

  constructor(public userService:UserService) { }

  ngOnInit() {
    this.userService.sales$.valueChanges().subscribe(sales=>{
      console.log(sales)
      sales.forEach(sale=>{
        sale['uid']=sale.cusromerName+sale.product+sale.dileveryDate
      })
      this.mySalesList=sales
    })
  }

}
