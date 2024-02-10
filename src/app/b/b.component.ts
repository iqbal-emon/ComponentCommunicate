import { Component } from '@angular/core';
import { CounterServicesService } from '../counter-services.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent {
constructor(public CounterServicesService:CounterServicesService){

}
// count:any=this.CounterServicesService.getCounter();
}
