import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    public authuser: string | null = null;

    constructor() {
    }
}
