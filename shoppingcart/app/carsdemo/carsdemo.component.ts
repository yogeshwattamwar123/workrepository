import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carsdemo',
  templateUrl: './carsdemo.component.html',
  styleUrls: ['./carsdemo.component.css']
})
export class CarsdemoComponent {
  public cars = [
    {title:'farari',imgsrc:'assets/cars1.jpeg',likes:0,dislikes:0},
    {title:'hundai',imgsrc:'assets/cars2.jpeg',likes:0,dislikes:0},
    {title:'audi',imgsrc:'assets/cars3.jpg',likes:0,dislikes:0},
    {title:'rolls royal',imgsrc:'assets/cars4.jpg',likes:0,dislikes:0}
  ];

  public likescounter(cars){
    cars.likes++;
  }

  public dislikecounter(cars){
    cars.dislikes++;
  }
}
