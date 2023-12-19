import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Users} from "../model/users";

@Injectable({
    providedIn: 'root'
})
export class JwtClientService {

    constructor(private http: HttpClient) {
    }

    public forgotPassword(requestmail: any) {
        console.log(requestmail)
        return this.http.post("http://localhost:8080/api/v1/user/forgotpassword", requestmail, {responseType: 'text'});
    }

    public generateToken(request: any) {
        return this.http.post("http://localhost:8080/api/v1/auth/authenticate", request)
    }

    public welcome(token: any) {
        let tokenStr = 'Bearer ' + token;
        const headers = new HttpHeaders().set("Authorization", tokenStr);
        return this.http.get("http://localhost:8080/api/v1/auth", {headers, responseType: 'text' as 'json'});
    }

}
