import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent{
  public categories = ['Select Category','Electronics','Shoes'];
  public electronics = ['Select Electronics','Samsung TV','Mobile'];
  public shoes = ['Select Shoe Product','Nike casuals','Lee cooper Boot'];

  public dataTable = [
    {Name:'Samsung TV',Price:45000.54,Photo:'assets/tv.jpg'},
    {Name:'Samsung Mobile',Price:13000.54,Photo:'assets/mobile.jpg'},
    {Name:'Nike Casuals',Price:4000.54,Photo:'assets/shoe.jpg'},
    {Name:'Lee cooper Boot',Price:7000.54,Photo:'assets/leecooper.jpg'}
  ];

  public products = [];
  public addproduct = [];
  public LstCategories;
  public LstProducts;
  public ProdName;
  public ProdPrice;
  public ProdPhoto;
  public qty=1;

  public GetDetails(index){
    this.ProdName = this.dataTable[index].Name;
    this.ProdPrice = this.dataTable[index].Price;
    this.ProdPhoto = this.dataTable[index].Photo;
  }

  public SelectedCategoryChanged(){
    switch(this.LstCategories){
      case 'Electronics' : 
      this.products = this.electronics;
      break;
      case 'Shoes' : 
      this.products = this.shoes;
      break;
      default:
      alert("please select a category");
      this.products = ['Select Category'];
    }
  }

  public SelectedProductChanged(){
    switch(this.LstProducts){
      case 'Samsung TV' : 
      this.GetDetails(0);
      break;
      case 'Mobile' : 
      this.GetDetails(1);
      break;
      case 'Nike casuals' : 
      this.GetDetails(2);
      break;
      case 'Lee cooper Boot' : 
      this.GetDetails(3);
      break;
    }

    

  }

  public AddProduct(){
    this.addproduct.push({id:1,name:this.LstProducts,price:this.ProdPrice,qty:this.qty,amount:this.ProdPrice*this.qty,preciew:this.ProdPhoto});
  }

  public deleteproduct(index){
    this.addproduct.splice(index,1);
  }
}
