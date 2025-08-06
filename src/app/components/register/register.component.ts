import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private service:EmployeeService, private router:Router){}

  employee = new FormGroup( {
    email: new FormControl('', [Validators.email]),
    name: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })

  // register(){
  //   this.service.register(this.employee.value).subscribe( {
  //     next: (res) => {
  //       alert('Employee Added Successfully!')
  //     },
  //     error: (err) => {
  //       alert(err.message)
  //     }

  //   })

  // }
  register() {
  this.service.register(this.employee.value).subscribe({
    next: (res) => {
      alert('Employee Added Successfully!');
    },
    error: (err) => {
      if (err.error && err.error.email) {
        alert('Error: ' + err.error.email[0]);  // This shows the duplicate email error
      } else {
        alert('An error occurred while registering.');
      }
    }
  });
}



}
