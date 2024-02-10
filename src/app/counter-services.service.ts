import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterServicesService {
  countArray: number[] = [];
  private valueSubject = new Subject<number>();
  value = this.valueSubject.asObservable();
  counter: number = 0;

  updateCounter() {
    this.counter++;
    this.valueSubject.next(this.counter);
   
  }

 
}
