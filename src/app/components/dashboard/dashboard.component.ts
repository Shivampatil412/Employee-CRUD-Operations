import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  employees:any;
  ngOnInit(): void {
    this.getAllEmployee();
  }
  constructor(private service:EmployeeService){}


  getAllEmployee(){
    this.service.getAllEmployee().subscribe(res =>{
      // console.log(res);
      this.employees = res;
    })
  }

  deleteEmployee(id:any){
    console.log(id);
    this.service.deleteEmployee(id).subscribe(res => {
      if(res){
        alert('Employee Deleted successfully')
      }else{
        alert('Something is Wrong')
      }
    })

  }

}
