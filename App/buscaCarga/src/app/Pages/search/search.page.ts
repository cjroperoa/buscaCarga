import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage   {

  constructor() { }

 
public estate;

async stateValidate(esta:boolean){
  if (esta == false) {
    return this.estate=false;
  }  else{
    return this.estate=true;
  }
  };
}
