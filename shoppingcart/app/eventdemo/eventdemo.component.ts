import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventdemo',
  templateUrl: './eventdemo.component.html',
  styleUrls: ['./eventdemo.component.css']
})
export class EventdemoComponent{
  public colorName;
  public GetColor(eventArgs){
    if(eventArgs.clientX >=1 && eventArgs.clientX<=113){
      this.colorName="red";alert("red");
    }
    else if(eventArgs.clientX >= 120 && eventArgs.clientX <= 292){
      this.colorName="green";alert("green");
    }
    else if(eventArgs.clientX >= 300 && eventArgs.clientX <= 370){
      this.colorName="blue";alert("blue");
    }
  }

  public Setcolor(){
    let colors={
      'color':this.colorName
    };
    return colors;
  }
}
