import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Users} from "../model/users";

@Injectable({providedIn: 'root'})
export class UserService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    public getUsers(): Observable<Users[]> {
        return this.http.get<Users[]>(`${this.apiServerUrl}/api/v1/user/all`);
    }

    public getUsersById(id: number): Observable<Users> {
        return this.http.get<Users>(`${this.apiServerUrl}/api/v1/user/find/${id}`);
    }

    public addUser(users: Users): Observable<Users> {
        return this.http.post<Users>(`${this.apiServerUrl}/api/v1/auth/register`, users);
    }


    updateUser(id: number, user: Users): Observable<Users> {
        return this.http.put<Users>(`${this.apiServerUrl}/api/v1/auth/update/${id}`, user);
    }


    public deleteUser(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/v1/user/delete/${id}`);
    }

}
