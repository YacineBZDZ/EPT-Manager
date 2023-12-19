import {Injectable} from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";
import {TokenService} from "../service/token.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})


export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private tokenService: TokenService,
    ) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let test = this.tokenService.isLogged()
        if (test) {
            return true
        }


        return this.router.navigate(['login']);
    }
}
