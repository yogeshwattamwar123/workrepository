import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showhide',
  templateUrl: './showhide.component.html',
  styleUrls: ['./showhide.component.css']
})
export class ShowhideComponent {
  public product = {Name:'Samsung TV',Price:45000,Mfd:new Date(),Photo:'assets/tv.jpg'};

  public isVisible = false;
  public ShowhidePreview(){
    this.isVisible = this.isVisible?false:true;
  }
}
