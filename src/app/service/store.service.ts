import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Store} from "../model/store";

@Injectable({providedIn: 'root'})
export class StoreService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    public getStore(): Observable<Store[]> {
        return this.http.get<Store[]>(`${this.apiServerUrl}/api/v1/user/store/all`);
    }

    public getStoreById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiServerUrl}/api/v1/user/store/find/${id}`);
    }

    public addStore(store: Store): Observable<Store> {
        return this.http.post<Store>(`${this.apiServerUrl}/api/v1/user/store/add`, store);
    }

    updateStore(id: number, store: Store): Observable<Store> {
        return this.http.put<Store>(`${this.apiServerUrl}/api/v1/user/store/update/${id}`, store);
    }

    public deleteStore(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/v1/user/store/delete/${id}`);
    }
}
