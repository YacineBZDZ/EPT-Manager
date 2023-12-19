import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Consumable} from "../model/consumable";

@Injectable({providedIn: 'root'})
export class ConsumableService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    public getConsumables(): Observable<Consumable[]> {
        return this.http.get<Consumable[]>(`${this.apiServerUrl}/api/v1/user/consumable/all`);
    }

    public getConsumablesById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiServerUrl}/api/v1/user/consumable/find/${id}`);
    }

    public addConsumable(consumable: Consumable): Observable<Consumable> {
        return this.http.post<Consumable>(`${this.apiServerUrl}/api/v1/user/consumable/add`, consumable);
    }

    public updateConsumable(id: number, consumable: Consumable): Observable<Consumable> {
        return this.http.put<Consumable>(`${this.apiServerUrl}/api/v1/user/consumable/update/${id}`, consumable);
    }

    public deleteConsumable(consumableId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/v1/user/consumable/delete/${consumableId}`);
    }
}
