import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {
  }

  addEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:8080/api/v1/auth/register', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:8080/api/v1/auth/update/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:8080/api/v1/user/all');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:8080/api/v1/user/delete/${id}`);
  }
}
