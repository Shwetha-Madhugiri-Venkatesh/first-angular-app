import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all:number=0;
  @Input()
  inStock:number=0;
  @Input()
  outStock:number=0;

  selectedRadio:string='all';

  //creating an custom event for parent element
  @Output()
  selectedRadioUpdateToParent:EventEmitter<string> =  new EventEmitter<string>();

  onselectedRadioUpdateToParent(){
    this.selectedRadioUpdateToParent.emit(this.selectedRadio);
  }
}
