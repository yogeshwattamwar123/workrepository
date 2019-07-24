import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent {
  public products = [
    {id:1,Name:'TV',Category:'Electronics'},
    {id:2,Name:'Mobile',Category:'Electronics'},
    {id:3,Name:'Nike Shoe',Category:'Shoe'}
  ];
}
