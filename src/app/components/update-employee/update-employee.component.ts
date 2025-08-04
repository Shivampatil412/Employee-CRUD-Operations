import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private service: EmployeeService,private router:Router, private route:ActivatedRoute){}

  employee!: FormGroup;


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.employee = new FormGroup({
      id:  new FormControl(''),
      email: new FormControl('', [Validators.email]),
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    this.service.getEmpById(id).subscribe(res => {
      this.employee.patchValue({
        id:res.id,
        email: res.email,
        name: res.name,
        password: res.password
      });
    })

  }



  update(){
    console.log(this.employee.value);

    this.service.updateEmployee(this.employee.value).subscribe(res => {
      if (res) {
        alert('Employee Updated');
        this.router.navigateByUrl('dashboard');

      } else {
        alert('Something went wrong')
      }

    });

  }

}
