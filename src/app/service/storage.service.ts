import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Storage} from "../model/storage"; // Assuming there's a model named 'Storage'.

@Injectable({providedIn: 'root'})
export class StorageService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    public getStorage(): Observable<Storage[]> {
        return this.http.get<Storage[]>(`${this.apiServerUrl}/api/v1/auth/storage/all`);
    }

    public getStorageById(id: number): Observable<any> {
        return this.http.get<any>(`${this.apiServerUrl}/api/v1/auth/storage/find/${id}`);
    }

    public addStorage(storage: Storage): Observable<Storage> {
        return this.http.post<Storage>(`${this.apiServerUrl}/api/v1/auth/storage/add`, storage);
    }

    public updateStorage(id: number, storage: Storage): Observable<Storage> {
        return this.http.put<Storage>(`${this.apiServerUrl}/api/v1/auth/storage/update/${id}`, storage);
    }

    public deleteStorage(storageId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/v1/auth/storage/delete/${storageId}`);
    }
}
