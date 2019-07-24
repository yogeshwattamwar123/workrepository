import { Component, OnChanges, SimpleChanges, Input} from '@angular/core';

@Component({
  selector: 'app-childcycle',
  templateUrl: './childcycle.component.html',
  styleUrls: ['./childcycle.component.css']
})
export class ChildcycleComponent implements OnChanges {

  @Input() public username;
  public current;
  public previous;

  constructor() { }

  ngOnChanges(changes:SimpleChanges){
    for(let property in changes){
      let change = changes[property];
      this.current = change.currentValue;
      this.previous = change.previousValue;
    }
  }

}
