import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nestediterations',
  templateUrl: './nestediterations.component.html',
  styleUrls: ['./nestediterations.component.css']
})
export class NestediterationsComponent {
  public datalist = [
    {category:'Electronics',products:['Samsung Tv','Mobile']},
    {category:'shoes',products:['Nike Casuals','Lee Cooper']}
  ];
}
