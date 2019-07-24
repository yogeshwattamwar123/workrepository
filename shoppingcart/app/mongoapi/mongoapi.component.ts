import { Component, OnInit } from '@angular/core';
import { ProdsdataService } from "../prodsdata.service";

@Component({
  selector: 'app-mongoapi',
  templateUrl: './mongoapi.component.html',
  styleUrls: ['./mongoapi.component.css']
})
export class MongoapiComponent implements OnInit {

  constructor(private data:ProdsdataService) { }

  public products = [];
  ngOnInit() {
    this.data.GetProducts()
      .subscribe(data => this.products = data)
  }

  

}
