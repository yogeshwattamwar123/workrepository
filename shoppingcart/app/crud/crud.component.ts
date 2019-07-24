import { Component, OnInit } from '@angular/core';
import { ProductsGetService } from '../products-get.service';
import { ProductsPostService } from '../products-post.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  

  constructor(private productget:ProductsGetService, private productpost:ProductsPostService) { }
  public products = [];
  ngOnInit() {
    this.productget.GetProducts()
      .subscribe(data => this.products=data);
  }

  AddProduct(data){
    this.productpost.AddProduct1(data).subscribe(Response => console.log('Inserted',Response));
    alert('Record Inserted');
  }
}
