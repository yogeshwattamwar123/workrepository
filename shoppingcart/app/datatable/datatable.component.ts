import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  public products=[
    {id:1,name:'shev',price:200},
    {id:2,name:'khava',price:400},
    {id:3,name:'peda',price:140},
    {id:4,name:'kalakand',price:300}
  ];
  public txtname;
  public txtprice;
  public id=this.products.length;
  public Addproduct(){
    this.id++;
    this.products.push({id:this.id,name:this.txtname,price:this.txtprice});
    alert('Record inserted');
    this.txtname='';
    this.txtprice='';
  }

  public Deleteproduct(index){
    
    var confirmdelete=confirm("are you sure u want to delete");
    if(confirmdelete){
      this.products.splice(index,1);
    }
  }
}
