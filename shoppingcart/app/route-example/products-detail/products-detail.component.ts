import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouteExampleService } from '../route-example.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private data:RouteExampleService) { }

  public productid;
  public products = [];

  ngOnInit() {
    this.products = this.data.GetProduct();
    this.productid = this.route.snapshot.paramMap.get('id');
  }

}