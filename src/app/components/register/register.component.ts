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

  register(){
    this.service.register(this.employee.value).subscribe(res => {
      console.log(res);
      if (res) {
        alert("employee added")
        this.router.navigateByUrl('login');
      }else{
        alert("something went wrong !")
        this.router.navigateByUrl('')
      }

    })

  }


}
