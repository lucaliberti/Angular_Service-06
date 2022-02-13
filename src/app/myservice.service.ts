import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MyserviceService {
  private data:number=0
  constructor() { }

  genNewNumber(){
    this.data=Math.round(Math.random()*100)
    console.log("Generato numero "+ this.data)
    return this.data
  }

  readNumber(){
    return this.data
  }

}
