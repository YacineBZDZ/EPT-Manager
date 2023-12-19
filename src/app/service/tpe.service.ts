import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Tpe} from "../model/tpe";

@Injectable({providedIn: 'root'})
export class TpeService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    public getTpe(): Observable<Tpe[]> {
        return this.http.get<Tpe[]>(`${this.apiServerUrl}/api/v1/user/tpe/all`);
    }

    public getTpeById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiServerUrl}/api/v1/user/tpe/find/${id}`);
    }

    public addTpe(tpe: Tpe): Observable<Tpe> {
        return this.http.post<Tpe>(`${this.apiServerUrl}/api/v1/user/tpe/add`, tpe);
    }

    public updateTpe(id: number, tpe: Tpe): Observable<Tpe> {
        return this.http.put<Tpe>(`${this.apiServerUrl}/api/v1/user/tpe/update/${id}`, tpe);
    }

    public deleteTpe(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/v1/user/tpe/delete/${id}`);
    }
}
