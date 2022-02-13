import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mydata:number=0

  constructor( private service:MyserviceService) { }

  onLeggiNuovoDato(){
    this.mydata=this.service.readNumber()
  }

}
