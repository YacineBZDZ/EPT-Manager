import {Component, OnInit} from '@angular/core';
import {Users} from "../../model/users";
import {UserService} from "../../service/users.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {Observable} from "rxjs";
import {Base64} from 'js-base64';

declare interface TableData {
    headerRow: string[];
    dataRows: Users[][];
}

@Component({
    selector: 'app-usermanagement',
    templateUrl: './usermanagement.component.html',
    styleUrls: ['./usermanagement.component.css']
})
export class UsermanagementComponent implements OnInit {
    // @ts-ignore
    public users: Users[];
    public jibuser: Users;
    public deleteUser: Users | null = null;
    public tableData1: TableData;
    public name1: string;
    public surname: string;
    public phoneNumber: string;
    public email1: string;
    public address: string;
    public typeUserStr: string;
    public password: string;
    public correctpass: boolean = false;


    displayDelete = "none";
    displayEdit = "none";
    displayAdd = "none";


    constructor(
        private userService: UserService,
    ) {
    }

    ngOnInit() {
        this.getUser();

    }

    OpenEdit(row) {
        this.displayEdit = "block";
        this.deleteUser = row;
        this.name1 = row[1];
        this.surname = row[2];
        this.typeUserStr = row[3]
        this.phoneNumber = row[4];
        this.email1 = row[5];
        this.address = row[6];
    }

    Opendelete(row) {
        this.displayDelete = "block";
        this.deleteUser = row;

    }

    OpenAdd() {
        this.displayAdd = "block";
    }


    closepopup() {
        this.displayDelete = "none";
        this.displayEdit = "none";
        this.displayAdd = "none";

    }

    public lpassyawsmk() {
    };

    /*public passcorrect(){
        if (this.lpassyawsmk===this.jibuser.password) {
            console.log("correct passowrd")
            return true;
        }
        console.log("incorrect password ")
        return false;
    }*/
    public getUser(): void {
        this.userService.getUsers().subscribe(
            (response: Users[]) => {
                this.users = response;
                console.log(this.users);
                this.tableData1 = {
                    headerRow: ['ID', 'Nom', 'Prénom', 'Type Utilisateur', 'Numéro de téléphone', 'Email', 'Address'],
                    dataRows: this.users.map(user => [
                        user?.id,
                        user?.surname,
                        user?.name,
                        user?.typeUserStr,
                        user?.phoneNumber,
                        user?.email,
                        user?.address,
                    ]),
                };


            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }


    public onAddUser(addForm: NgForm): void {
        document.getElementById('add-users-form')?.click();
        this.userService.addUser(addForm.value).subscribe(
            (response: Users) => {
                // console.log(response);
                this.getUser();
                addForm.reset();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
                addForm.reset();
            }
        );
    }


    public onUpdateUser(id: number, user: Users): void {
        /* this.verify(id);
         console.log(this.correctpass)
         if (this.correctpass){*/
        this.userService.updateUser(id, user).subscribe(
            (response: Users) => {
                // console.log(response);
                this.getUser();
                this.displayEdit = "none";

            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
        /*  } else {

          }*/
    }


    public onDeleteUser(id: number): void {
        this.userService.deleteUser(id).subscribe(
            (response: void) => {
                console.log('User deleted successfully');
                this.getUser();
                this.displayDelete = "none";

            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );

    }


    verify(id: number | undefined) {
        this.userService.getUsersById(id).subscribe(
            (response: Users) => {
                this.jibuser = response;
                console.log("hada luser" + this.jibuser);
                const encodedPassword = this.jibuser.password;
                const decodedPassword = Base64.decode(encodedPassword).toString();
                /* if ( decodedPassword=== this.password){
                return this.correctpass = true ;
                }*/
            }, (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }
}
