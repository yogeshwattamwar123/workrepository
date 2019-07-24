import { Component, OnInit } from '@angular/core';
import { RouteExampleService } from '../route-example.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent{

  constructor(private data:RouteExampleService, private router: Router) { }
  public products = [];
  ngOnInit() {
    this.products = this.data.GetProduct();
  }

  GetDetails(product){
    this.router.navigate(['/products',product.id]);
  }
}
