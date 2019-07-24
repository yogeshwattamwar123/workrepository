import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent {
  public topic = [
    {title:'angular JS',description:'It is a client side framework'},
    {title:'Angular',description:'it is an client side platform'}
  ]
}
