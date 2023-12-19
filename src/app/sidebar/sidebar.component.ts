import {Component, OnInit} from '@angular/core';
import {HasRoleBankGuard} from "../helpers/has-roleBank.guard";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from "@angular/router";
import {find, map, Observable} from "rxjs";
import {Users} from "../model/users";
import {HttpErrorResponse} from "@angular/common/http";
import {TokenService} from "../service/token.service";
import {UserService} from "../service/users.service";
import {BrandsComponent} from "../management/brands/brands.component";

declare const $: any;

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
    children?: RouteInfo[];
}

export const ROUTES: RouteInfo[] = [
    {path: '/dashboard', title: 'Dashboard', icon: 'pe-7s-graph', class: ''},
    // { path: '/user', title: 'User Profile', icon: '', class: '', },
    {path: '/usermanagement', title: 'utilisateurs', icon: 'pe-7s-user', class: ''},
    {path: '/tpemanagement', title: 'TPE', icon: 'pe-7s-calculator', class: ''},
    {path: '/test', title: 'Mise En Place TPE', icon: 'pe-7s-network', class: ''},
    {path: '/storemanagement', title: 'Magasin', icon: 'pe-7s-cart', class: ''},
    {path: '/simmanagement', title: 'SIM', icon: 'pe-7s-diskette', class: ''},
    {path: '/bankmanagement', title: 'Banque', icon: 'pe-7s-culture', class: ''},
    {path: '/consumablemanagement', title: 'Produit', icon: ' pe-7s-shopbag', class: ''},
    {path: '/storagemanagement', title: 'Stockage', icon: 'pe-7s-drawer', class: ''},
    {path: '/stocktpecomponent', title: 'stock Tpe', icon: 'pe-7s-box1', class: ''},
    {path: '/brandsComponent', title: 'Marque TPE ', icon: 'pe-7s-science', class: ''},
    {path: '/maps', title: 'Maps', icon: 'pe-7s-map-2', class: ''},
    // { path: '/table', title: 'Table List', icon: 'pe-7s-note2', class: '' },
    // { path: '/typography', title: 'Typography', icon: 'pe-7s-news-paper', class: '' },
    // { path: '/icons', title: 'Icons', icon: 'pe-7s-science', class: '' },
    {path: '/file', title: 'Fichiers BM / TM ', icon: 'pe-7s-folder', class: ''},
    // { path: '/notifications', title: 'Notifications', icon: 'pe-7s-bell', class: '' },
];

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    private user: Users[] | null = null;
    private tokenemail: string | null = null;

    constructor(
        private hasRoleBankGuard: HasRoleBankGuard,
        private router: Router,
        private tokenService: TokenService,
        private userService: UserService
    ) {
    }

    ngOnInit() {
        this.checkAccess().subscribe(
            () => {
                this.menuItems = ROUTES.filter(menuItem => menuItem);
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    isMobileMenu() {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    }

    private checkAccess(): Observable<void> {
        return this.getUserType().pipe(
            map((findmail: Users | undefined) => {
                console.log("this is in check " + findmail?.typeUserStr);
                if (findmail?.typeUserStr === "bank") {
                    const pathsToRemove = ['/usermanagement', '/bankmanagement', '/simmanagement', '/consumablemanagement', '/storemanagement', '/test'];
                    pathsToRemove.forEach(path => {
                        const index = ROUTES.findIndex(route => route.path === path);
                        if (index !== -1) {
                            ROUTES.splice(index, 1);
                        }
                    });
                } else if (findmail?.typeUserStr === "admin") {
                    const pathsToRemove = ['/file'];
                    pathsToRemove.forEach(path => {
                        const index = ROUTES.findIndex(route => route.path === path);
                        if (index !== -1) {
                            ROUTES.splice(index, 1);
                        }
                    });
                } else if (findmail?.typeUserStr === "installer") {
                    const pathsToRemove = ['/file', '/usermanagement', '/bankmanagement', '/storagemanagement'];
                    pathsToRemove.forEach(path => {
                        const index = ROUTES.findIndex(route => route.path === path);
                        if (index !== -1) {
                            ROUTES.splice(index, 1);
                        }
                    });
                } else if (findmail?.typeUserStr === "storekeeper") {
                    const pathsToRemove = ['/file', '/usermanagement', '/bankmanagement', '/simmanagement', '/consumablemanagement', '/storemanagement', '/maps', '/test'];
                    pathsToRemove.forEach(path => {
                        const index = ROUTES.findIndex(route => route.path === path);
                        if (index !== -1) {
                            ROUTES.splice(index, 1);
                        }
                    });
                } else if (findmail?.typeUserStr === "support") {
                    const pathsToRemove = ['/file', '/usermanagement', '/bankmanagement', '/simmanagement', '/consumablemanagement', '/storemanagement', '/maps', '/test'];
                    pathsToRemove.forEach(path => {
                        const index = ROUTES.findIndex(route => route.path === path);
                        if (index !== -1) {
                            ROUTES.splice(index, 1);
                        }
                    });
                }

            })
        );
    }

    private getUserType(): Observable<Users | undefined> {
        return new Observable<Users | undefined>((observer) => {
            this.userService.getUsers().subscribe(
                (response: Users[]) => {
                    this.user = response;
                    // console.log(this.user);
                    this.tokenemail = this.tokenService.getUserFromToken(this.tokenService.getToken()).sub;
                    console.log("Here is the value of sub: ", this.tokenemail);

                    let findmail = this.user.find(user => user.email === this.tokenemail);
                    // console.log("This is findmail:", findmail);
                    observer.next(findmail);
                },
                (error: HttpErrorResponse) => {
                    alert(error.message);
                    observer.next(undefined);
                }
            );
        });
    }
}
