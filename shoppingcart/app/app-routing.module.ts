import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsListComponent } from './route-example/products-list/products-list.component';
import { ProductsDetailComponent } from './route-example/products-detail/products-detail.component';
// import { Home1Component } from './routing-demo/home1/home1.component';
// import { AboutComponent } from './routing-demo/about/about.component';
// import { ContactComponent } from './routing-demo/contact/contact.component';
// import { NotfoundComponent } from './routing-demo/notfound/notfound.component';

const routes: Routes = [
  // {path:'home', component:Home1Component},
  // {path:'about', component:AboutComponent},
  // {path:'contact', component:ContactComponent},
  // {path:'', redirectTo:'home', pathMatch:'full'},
  // {path:'**', component:NotfoundComponent}
  {path:'products', component:ProductsListComponent},
  {path:'products/:id', component:ProductsDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
