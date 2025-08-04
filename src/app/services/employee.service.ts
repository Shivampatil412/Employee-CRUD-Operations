import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor (private http: HttpClient) {}

  // http://localhost:8080/login
  login(userLogin:any):Observable<any>{
    return this.http.post('http://localhost:8080/login',userLogin);
  }

  register(employee:any):Observable<any>{
    //http://localhost:8080/register
    return this.http.post('http://localhost:8080/register',employee)
  }

  getAllEmployee():Observable<any>{
    //http://localhost:8080/getAll
    return this.http.get('http://localhost:8080/getAll')
  }

  deleteEmployee(id:any):Observable<any> {
    //http://localhost:8080/delete
    return this.http.delete(`http://localhost:8080/delete?id=${id}`)
  }

  getEmpById(id:any): Observable<any> {
    //http://localhost:8080/getById?id=1
    return this.http.get(`http://localhost:8080/getById?id=${id}`)
  }


  updateEmployee(employee:any):Observable<any>{
    // http://localhost:8080/update
    return this.http.put('http://localhost:8080/update', employee)
  }
}
