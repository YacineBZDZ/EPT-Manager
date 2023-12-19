import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Bank} from "../model/bank";

@Injectable({providedIn: 'root'})
export class BankService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    public getBank(): Observable<Bank[]> {
        return this.http.get<Bank[]>(`${this.apiServerUrl}/api/v1/user/bank/all`);
    }

    public addBank(bank: Bank): Observable<Bank> {
        return this.http.post<Bank>(`${this.apiServerUrl}/api/v1/user/bank/add`, bank);
    }

    public updateBank(id: number, bank: Bank): Observable<Bank> {
        return this.http.put<Bank>(`${this.apiServerUrl}/api/v1/user/bank/update/${id}`, bank);
    }

    public deleteBank(bankId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/v1/user/bank/delete/${bankId}`);
    }

}
