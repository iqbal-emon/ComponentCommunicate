import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input() item:string|undefined;

  

@Output() newItemEvent = new EventEmitter<string>();

addNewItem(value: string) {
  this.newItemEvent.emit(value);
}

}
// console.log(Title);
