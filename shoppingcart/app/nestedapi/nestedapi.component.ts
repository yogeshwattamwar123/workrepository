import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { apidatainterface } from './apidatainterface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nestedapi',
  templateUrl: './nestedapi.component.html',
  styleUrls: ['./nestedapi.component.css']
})
export class NestedapiComponent implements OnInit {

  public getapiurl = "http://127.0.0.1:8080/api/getnesteddata";
  public postapiurl = "http://127.0.0.1:8080/api/postnesteddata";
  public deleteapiurl = "http://127.0.0.1:8080/api/deletenesteddata";
  
  public apidata:apidatainterface;

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get<apidatainterface>(this.getapiurl)
    .subscribe(res => {
      this.apidata = res;
      console.log(this.apidata);
    })
  }

  addapidata(data){
    let employeename = data["employeename"];
    let employeesalary = data["employeesalary"];
    let employeedob = data["employeedob"];
    let employeedepartment = data["employeedepartment"];
    let technology = data["technology"];
    let duration = data["duration"];
    // let nesteddata = {employeename, employeesalary, employeedetails : [{employeedob, employeedepartment,employeeproject : [{technology, duration}]}]};

    let nesteddata = {employeename, employeesalary, employeedetails : [{employeedob, employeedepartment,employeeproject : [{technology, duration}]}]};

    // let nesteddata = {
    //   employeename:String,
    //   employeesalary:String,
    //   "employeedetails":[{
    //     employeedob:Date,
    //     employeedepartment:String,
    //     "employeeproject":[{
    //       technology:String,
    //       duration:Number
    //     }]
    //   }]
    // };

    // nesteddata = {
    //   employeename:employeename,
    //   employeesalary:employeesalary,
    //   "employeedetails":[{
    //     employeedob:employeedob,
    //     employeedepartment:employeedepartment,
    //     "employeeproject":[{
    //       technology:technology,
    //       duration:duration
    //     }]
    //   }]
    // };
    console.log(nesteddata);
    
    this.http.post(this.postapiurl,nesteddata).subscribe(res =>{
      console.log("recor inserted");
    })
  }

  deleteapidata(event){
      var target = event.target || event.srcElement || event.currentTarget;
      var id = target.attributes.id.nodeValue;
      this.http.delete(this.deleteapiurl+"/",id).subscribe(res =>{
        console.log("deleted");
      });
  }
}
