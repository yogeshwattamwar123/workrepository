import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public cities = ['Delhi' , 'Hyd'];
  constructor() { }

  ngOnInit() {
  }

  public GetCount(){
    return this.cities.length;
  }

}
