import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  public SelectedcategoryValue = 'All';
  @Output() public Categorychanged:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public Oncategorychanged(){alert(this.SelectedcategoryValue);
    this.Categorychanged.emit(this.SelectedcategoryValue);
  }
}
