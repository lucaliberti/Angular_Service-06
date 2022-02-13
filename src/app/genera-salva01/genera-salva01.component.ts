import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-genera-salva01',
  templateUrl: './genera-salva01.component.html',
  styleUrls: ['./genera-salva01.component.css']
})
export class GeneraSalva01Component implements OnInit {

  mydata:number=0

  constructor( private service:MyserviceService) { }
  
  ngOnInit(): void {
    this.mydata=this.service.readNumber()
  }

  // ------------------------------
  // gestione degli eventi
  onLeggiNuovoDato(){
    this.mydata=this.service.readNumber()
  }

  onGeteraNuovoDato(){
    this.service.genNewNumber()
  }

}
