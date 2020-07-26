import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor() { }

  getDropOption(list,labelName){
    let dropOptions=[]
    list.forEach(option=>{
     dropOptions.push(
      {label:option[labelName], value:option}
     )
    })
    return dropOptions
  }
}
