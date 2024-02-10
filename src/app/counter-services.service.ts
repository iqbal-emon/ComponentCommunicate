import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterServicesService {
  constructor() { }
   countArray: number[] = [];
  counter:number=0;
  updateCounter(){
    this.counter++;
    console.log('count is',this.counter);
    this.countArray.push(this.counter)
console.log("count array",this.countArray);

  }
  getCounter(){
    return this.counter;
  }
}