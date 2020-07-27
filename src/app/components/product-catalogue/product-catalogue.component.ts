import { Component, OnInit } from '@angular/core';
import {AuthService} from 'src/app/service/auth.service';
import {UserService} from 'src/app/service/user.service';

@Component({
  selector: 'app-product-catalogue',
  templateUrl: './product-catalogue.component.html',
  styleUrls: ['./product-catalogue.component.css']
})
export class ProductCatalogueComponent implements OnInit {

  catalogueList
  addcatalogueDisplay
  cols=[
    { field: 'itemName', header: 'Name' },
    { field: 'weight', header: 'Weigth (g)' },
    { field: 'timeRequired', header: 'Time (Hr)' },
    ];
    catalogue

  constructor(public auth:AuthService, public userService:UserService) { }


  ngOnInit() {
    this.catalogue=new Catalogue
    console.log(this.auth.user$)
    this.userService.catalogue$.valueChanges().subscribe(catalogues=>{
      catalogues.forEach(ele=>{
        ele['uid']=ele.itemName+'-'+ele.weight
      })
      console.log(catalogues)
      this.catalogueList=catalogues
    })
  }

  addCatalogue(){
    let request={
      itemName:this.catalogue.itemName,
      weight:this.catalogue.weight,
      timeRequired:this.catalogue.timeRequired,
    }
    this.userService.addProduct(request)
    this.nullifycatalogue()
    this.addcatalogueDisplay=false

  }

  nullifycatalogue(){
    this.catalogue.itemName=null
    this.catalogue.weight=null
    this.catalogue.timeRequired=null
    
  }

}

export class Catalogue{
  itemName;
  weight;
  timeRequired;
}
