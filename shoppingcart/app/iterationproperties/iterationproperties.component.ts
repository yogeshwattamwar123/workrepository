import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iterationproperties',
  templateUrl: './iterationproperties.component.html',
  styleUrls: ['./iterationproperties.component.css']
})
export class IterationpropertiesComponent {
  public productdetail =[
    {id:1,name:'yogesh',price:3000},
    {id:2,name:'sham',price:3000},
    {id:3,name:'santosh',price:3000},
    {id:4,name:'ram',price:3000},
    {id:5,name:'vijay',price:3000}
  ]

  public updatetable(){
    this.productdetail =[
      {id:1,name:'yogesh',price:3000},
      {id:2,name:'sham',price:3000},
      {id:3,name:'santosh',price:3000},
      {id:4,name:'ram',price:3000},
      {id:5,name:'vijay',price:3000},
      {id:6,name:'rajesh',price:3000}
    ]
  }

  public trackById(index,item){
    return item.id;
  }
}
