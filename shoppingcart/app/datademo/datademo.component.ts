import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datademo',
  templateUrl: './datademo.component.html',
  styleUrls: ['./datademo.component.css']
})
export class DatademoComponent {

  public product = {
    name : 'Samsung TV',
    price : 45000.78,
    qty:2,
    mfg:new Date(20,4,2019),
    preview: 'assets/tv.jpg'
  };

  public GetTotal(){
    return (this.product.qty * this.product.price);
  }

}
