import {Component, Input, OnInit} from '@angular/core';
import {Tpe} from "../../model/tpe";
import {HttpErrorResponse} from "@angular/common/http";
import {TraceabilityService} from "../../service/traceability.service";
import {Traceability} from "../../model/traceability";
import {Users} from "../../model/users";
import {UserService} from "../../service/users.service";

@Component({
    selector: 'app-status',
    templateUrl: './traceability.component.html',
    styleUrls: ['./traceability.component.css']
})
export class TraceabilityComponent implements OnInit {
    public traceability: Traceability[];
    public traceabilitydisplay: Traceability;
    public users: Users[];

    constructor(private traceabilityService: TraceabilityService, private userService: UserService) {
    }

    ngOnInit(): void {
        this.getTraceability();
        this.getUser();
    }

    // @Input() Inputdata:any;
    public getTraceability(): void {
        this.traceabilityService.getTraceability().subscribe(
            (response: Traceability[]) => {
                this.traceability = response;
                console.log(this.traceability);

            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public getUser(): void {
        this.userService.getUsers().subscribe(
            (response: Users[]) => {
                this.users = response;
                console.log(this.users);
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }
}
