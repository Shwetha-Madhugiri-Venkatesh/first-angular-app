import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText:string="";
  inputChange(event:any){
    this.searchText=event.target.value;
  }
  onclick(event:any){
    console.log(event)
  }
  //from child search to parent app
  @Output()
  sendingSearchText:EventEmitter<string> = new EventEmitter<string>();

  onSearchTextChange(){
    this.sendingSearchText.emit(this.searchText);
  }
  click_text:string="";
}
