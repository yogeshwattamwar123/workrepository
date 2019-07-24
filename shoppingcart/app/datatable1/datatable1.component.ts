import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable1',
  templateUrl: './datatable1.component.html',
  styleUrls: ['./datatable1.component.css']
})
export class Datatable1Component {
  public products=[
    {id:1,name:'shev',price:200},
    {id:2,name:'khava',price:400},
    {id:3,name:'peda',price:140},
    {id:4,name:'kalakand',price:300}
  ];
}
