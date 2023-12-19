import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {Users} from "../model/users";
import {UserModel} from "../model/user.model";

@Injectable({
    providedIn: 'root'
})
export class TokenService {
    private user!: UserModel;

    constructor(private router: Router) {
        const token = this.getToken();
        if (token) {
            this.user = this.getUserFromToken(token);
            // console.log(this.user.sub);
        }
    }

    saveToken(token: string): void {
        localStorage.setItem('token', token);
    }

    isLogged(): boolean {
        const token = localStorage.getItem('token');
        return !!token;
    }

    clearToken(): void {
        localStorage.removeItem('token');
        this.router.navigate(['login']);
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    getUserFromToken(token: string): UserModel {
        const decodedToken = atob(token.split('.')[1]);
        return JSON.parse(decodedToken) as UserModel;
    }
}
