import { Component } from '@angular/core';
import { CounterServicesService } from '../counter-services.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent {
  constructor(private CounterServicesService:CounterServicesService){
    
  }
  // count:number=0;
  IncreasCounter(){

    this.CounterServicesService.updateCounter();
  }
}
