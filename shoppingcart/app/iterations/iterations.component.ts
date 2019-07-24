import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-iterations',
  templateUrl: './iterations.component.html',
  styleUrls: ['./iterations.component.css']
})
export class IterationsComponent {
  public products:Product[] = [
    new Product('Samsung TV',12000.56,'assets/tv.jpg'),
    new Product('Nike shoe',4500.34,'assets/shoe.jpg')
  ];

  public catergories = ['elections','shoes'];
}
