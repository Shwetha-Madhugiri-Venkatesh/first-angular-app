import { Component } from '@angular/core';

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
  click_text:string="";
}
