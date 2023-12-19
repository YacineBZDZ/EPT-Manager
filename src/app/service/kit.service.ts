import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Tpe} from "../model/tpe";
import {Kit} from "../model/Kit";

@Injectable({providedIn: 'root'})
export class KitService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    public getKit(): Observable<any> {
        return this.http.get<any>(`${this.apiServerUrl}/api/v1/user/kit/all`);
    }

    public getTpeById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiServerUrl}/api/v1/user/kit/find/${id}`);
    }

    public postKit(kit: Kit): Observable<any> {
        return this.http.post<any>(`${this.apiServerUrl}/api/v1/user/kit/add`, kit);
    }

    public updateTpe(id: number, tpe: Tpe): Observable<Tpe> {
        return this.http.put<Tpe>(`${this.apiServerUrl}/api/v1/user/kit/update/${id}`, tpe);
    }

    public deleteKit(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/v1/user/kit/delete/${id}`);
    }
}
