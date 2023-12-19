import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Traceability} from "../model/traceability";

@Injectable({providedIn: 'root'})
export class TraceabilityService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    public getTraceability(): Observable<Traceability[]> {
        return this.http.get<Traceability[]>(`${this.apiServerUrl}/api/v1/user/traceability/all`);
    }

    public addTraceability(traceability: Traceability): Observable<Traceability> {
        return this.http.post<Traceability>(`${this.apiServerUrl}/api/v1/user/traceability/add`, traceability);
    }

    public updateTraceability(traceability: Traceability): Observable<Traceability> {
        return this.http.put<Traceability>(`${this.apiServerUrl}/api/v1/user/traceability/update`, traceability);
    }

    public deleteTraceability(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/v1/user/traceability/delete/${id}`);
    }

    getTrace(row: any) {
        return this.http.get(`${this.apiServerUrl}/api/v1/user/traceability/${row[0]}`);
    }
}
