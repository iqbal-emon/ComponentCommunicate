import { Component, OnInit } from '@angular/core';
import { CounterServicesService } from '../counter-services.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  countArray: number[] = [];

  constructor(public counterService: CounterServicesService) {}

  ngOnInit() {
    this.counterService.value.subscribe(newValue => {
      console.log("newValue",newValue);
    });
  }
}
