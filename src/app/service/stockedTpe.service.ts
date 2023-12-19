import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {StockedTpe} from "../model/StockedTpe";

@Injectable({providedIn: 'root'})
export class StockedTpeService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    public getstockedTpe(): Observable<any> {
        return this.http.get<any>(`${this.apiServerUrl}/api/v1/user/stockedtpe/all`);
    }

    public poststockedTpe(stockedTpe: StockedTpe): Observable<any> {
        return this.http.post<any>(`${this.apiServerUrl}/api/v1/user/stockedtpe/add`, stockedTpe);
    }


    public deletestockedTpe(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/v1/user/stockedtpe/delete/${id}`);
    }
}
