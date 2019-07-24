import { HttpClient } from "@angular/common/http"
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable()

export class ProdsdataService {
public apiurl = "http://127.0.0.1:8000/api/getProducts";
  constructor(private http:HttpClient) { }

  public GetProducts():Observable<IProducts[]>{
    return this.http.get<IProducts[]>(this.apiurl);
  }
}
