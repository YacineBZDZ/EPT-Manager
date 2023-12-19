import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sim} from "../model/sim";

@Injectable({providedIn: 'root'})
export class SimService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    public getSim(): Observable<Sim[]> {
        return this.http.get<Sim[]>(`${this.apiServerUrl}/api/v1/user/sim/all`);
    }

    public getSimById(idsim: number): Observable<any> {
        return this.http.get<any>(`${this.apiServerUrl}/api/v1/user/sim/find/${idsim}`);
    }

    public addSim(sim: Sim): Observable<Sim> {
        return this.http.post<Sim>(`${this.apiServerUrl}/api/v1/user/sim/add`, sim);
    }

    public updateSim(id: number, sim: Sim): Observable<Sim> {
        return this.http.put<Sim>(`${this.apiServerUrl}/api/v1/user/sim/update/${id}`, sim);
    }

    public deleteSim(simId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/v1/user/sim/delete/${simId}`);
    }


    getSims(row: any) {
        return this.http.get(`${this.apiServerUrl}/api/v1/user/sim/${row[0]}`);
    }


}
