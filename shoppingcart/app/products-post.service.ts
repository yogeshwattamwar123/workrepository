import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ProductsPostService {
  public url = "http://127.0.0.1:8000/api/addProducts";
  constructor(private http: HttpClient) { }

  AddProduct1(productData){
    return this.http.post<any>(this.url,productData);
  }
}
