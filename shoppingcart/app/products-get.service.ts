import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProductsGetService {
  public url = "http://127.0.0.1:8000/api/getProducts";
  constructor(private http: HttpClient) { }

  public GetProducts(): Observable<bussinessiproducts[]>{
    return this.http.get<bussinessiproducts[]>(this.url);
  }
}
