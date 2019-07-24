import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  public products = [
    { Name:'Samsung Tv', Price:34000.34, Category:'Electronics'},
    { Name:'Shoes', Price:4000.78, Category:'Shoes'}
  ]

  public selectedvalue = 'All';
  
  constructor() { }

  ngOnInit() {
  }

  public Oncategorychanged(selectedvalue){alert(1);
    this.selectedvalue = selectedvalue;
  }
}
