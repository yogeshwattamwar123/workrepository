import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DatademoComponent } from './datademo/datademo.component';
import { DemocomponentComponent } from './democomponent/democomponent.component';
import { IterationsComponent } from './iterations/iterations.component';
import { NestediterationsComponent } from './nestediterations/nestediterations.component';
import { TopicComponent } from './topic/topic.component';
import { IterationpropertiesComponent } from './iterationproperties/iterationproperties.component';
import { CarsdemoComponent } from './carsdemo/carsdemo.component';
import { DatatableComponent } from './datatable/datatable.component';
import { Datatable1Component } from './datatable1/datatable1.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShowhideComponent } from './showhide/showhide.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { Login1Component } from './login1/login1.component';
import { EventdemoComponent } from './eventdemo/eventdemo.component';
import { MongoapiComponent } from './mongoapi/mongoapi.component';
import { ProdsdataService } from './prodsdata.service';
import { HttpClientModule } from '@angular/common/http';
import { CrudComponent } from './crud/crud.component';
import { ProductsGetService } from './products-get.service';
import { ProductsPostService } from './products-post.service';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FilterComponent } from './filter/filter.component';
import { DataComponent } from './data/data.component';
import { AboutComponent } from './routing-demo/about/about.component';
import { ContactComponent } from './routing-demo/contact/contact.component';
import { NotfoundComponent } from './routing-demo/notfound/notfound.component';
import { Home1Component } from './routing-demo/home1/home1.component';
import { RoutinglandingComponent } from './routing-demo/routinglanding/routinglanding.component';
import { ProductsListComponent } from './route-example/products-list/products-list.component';
import { ProductsDetailComponent } from './route-example/products-detail/products-detail.component';
import { RouteExampleService } from './route-example/route-example.service';
import { ParentcycleComponent } from './angular-cycle/parentcycle/parentcycle.component';
import { ChildcycleComponent } from './angular-cycle/childcycle/childcycle.component';
import { NestedapiComponent } from './nestedapi/nestedapi.component';
import { NestedapifirstComponent } from './nestedapifirst/nestedapifirst.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    DatademoComponent,
    DemocomponentComponent,
    IterationsComponent,
    NestediterationsComponent,
    TopicComponent,
    IterationpropertiesComponent,
    CarsdemoComponent,
    DatatableComponent,
    Datatable1Component,
    ShoppingComponent,
    ShowhideComponent,
    ConditionsComponent,
    ClassbindingComponent,
    StylebindingComponent,
    Login1Component,
    EventdemoComponent,
    MongoapiComponent,
    CrudComponent,
    ParentComponent,
    ChildComponent,
    FilterComponent,
    DataComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotfoundComponent,
    Home1Component,
    RoutinglandingComponent,
    ProductsListComponent,
    ProductsDetailComponent,
    ParentcycleComponent,
    ChildcycleComponent,
    NestedapiComponent,
    NestedapifirstComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProdsdataService,ProductsGetService,ProductsPostService,RouteExampleService],
  bootstrap: [NestedapiComponent]
})
export class AppModule { }
