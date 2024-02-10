import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServicesService {

  constructor() { }
  counter:number=0;
  updateCounter(){
    this.counter++;
    console.log('count is',this.counter);


  }
  getCounter(){
    return this.counter;
  }
}