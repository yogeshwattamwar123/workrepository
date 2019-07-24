import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent {
  public backcolor;
  public textcolor;
  public Effects(){
    let styles = {
      'background-color':this.backcolor,
      'color':this.textcolor,
      'text-align':'center'
    };
    return styles;
  }
}
