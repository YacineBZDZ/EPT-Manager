import {Component, OnInit} from '@angular/core';
import {JwtClientService} from "../service/jwt-client.service";
import {TokenService} from "../service/token.service";
import {Router} from "@angular/router";
import {Users} from "../model/users";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    authRequest: any = {
        "email": null,
        "password": null
    }

    constructor(
        private service: JwtClientService,
        private tokenService: TokenService,
        private router: Router
    ) {
    }

    ngOnInit() {
    }

// @ts-ignore
    public getAccessToken(authRequest) {
        let resp = this.service.generateToken(authRequest);
        resp.subscribe((data: any) => {
            console.log("Token: " + data.token)
            // @ts-ignore
            this.tokenService.saveToken(data.token)
            this.router.navigate(['/'])
        });
    }

}
