import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";
import { AuthService } from "src/app/service/auth.service";
import { UserService } from "src/app/service/user.service";

@Component({
  selector: "app-product-catalogue",
  templateUrl: "./product-catalogue.component.html",
  styleUrls: ["./product-catalogue.component.css"],
})
export class ProductCatalogueComponent implements OnInit {
  catalogueList;
  addcatalogueDisplay;
  cols = [
    { field: "itemName", header: "Name" },
    { field: "weight", header: "Weigth (g)" },
    { field: "timeRequired", header: "Time (Hr)" },
  ];
  catalogue;

  constructor(public auth: AuthService, public userService: UserService) {}

  ngOnInit() {
    this.catalogue = new Catalogue();
    console.log(this.auth.user$);
    this.userService.catalogue$
      .snapshotChanges()
      .pipe(
        map((val: Array<any>) => {
          console.log(val);
          return val.map((a) => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return { id, ...data };
          });
        })
      )
      .subscribe((catalogues) => {
        console.log(catalogues);
        this.catalogueList = catalogues;
      });
  }

  addCatalogue() {
    let request = {
      itemName: this.catalogue.itemName,
      weight: this.catalogue.weight,
      timeRequired: this.catalogue.timeRequired,
    };
    this.userService.addProduct(request);
    this.nullifycatalogue();
    this.addcatalogueDisplay = false;
  }

  nullifycatalogue() {
    this.catalogue.itemName = null;
    this.catalogue.weight = null;
    this.catalogue.timeRequired = null;
  }

  updateProduct(value){
    console.log(value)
    for(let key in value ){
      if(key.includes('Old')){
        console.log(key,'in')
        delete value[key]
      }
    }
    console.log(value)
    this.userService.updateProduct(value.id,value)
  }

  delete(id){
    this.userService.deleteProduct(id)
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

export class Catalogue {
  itemName;
  weight;
  timeRequired;
}
