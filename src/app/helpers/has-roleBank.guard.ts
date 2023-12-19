import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import {Injectable} from "@angular/core";
import {find, Observable} from "rxjs";
import {TokenService} from "../service/token.service";
import {UserService} from "../service/users.service";
import {Users} from "../model/users";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class HasRoleBankGuard implements CanActivate {
    private user: Users[] | null = null;
    private tokenemail: string | null = null;

    constructor(
        private router: Router,
        private tokenService: TokenService,
        private userService: UserService
    ) {
        this.getUserType()

    }

    private getUserType(): Observable<boolean> {
        return new Observable<boolean>((observer) => {
            this.userService.getUsers().subscribe(
                (response: Users[]) => {
                    this.user = response;
                    this.tokenemail = this.tokenService.getUserFromToken(this.tokenService.getToken()).sub;

                    let findmail = this.user.find(user => user.email === this.tokenemail);

                    if (findmail && findmail.typeUserStr === "bank") {
                        observer.next(true);
                    } else {
                        console.log("User does not have bank role.");
                        observer.next(false);
                    }
                },
                (error: HttpErrorResponse) => {
                    alert(error.message);
                    observer.next(false);
                }
            );
        });
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.getUserType();
    }
}
