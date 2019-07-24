import { Injectable } from '@angular/core';

@Injectable()

export class RouteExampleService {

  constructor() { }

  GetProduct(){
    return [
      {id:1,name:'TV',price:49808.76},
      {id:2,name:'Nike Casuals',price:7673.56}
    ]
  }
}
