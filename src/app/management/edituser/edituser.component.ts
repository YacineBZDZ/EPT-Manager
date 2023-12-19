import {Component, Inject, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {Users} from "../../model/users";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../service/users.service";

@Component({
    selector: 'app-edituser',
    templateUrl: './edituser.component.html',
    styleUrls: ['./edituser.component.scss']
})
export class EditUserComponent implements OnInit {
    // public editUsers: Users | null = null;

    constructor(
        /*   public dialogRef: MatDialogRef<EditUserComponent>,
           private userService: UserService,
           @Inject(MAT_DIALOG_DATA) public data: Users*/
    ) {
        // this.editUsers = data;
    }

    ngOnInit() {
    }

    /*   onUpdateUser(user: Users): void {
       this.userService.updateUser(user.id, user).subscribe(
           (response: Users) => {
             console.log(response);
             this.dialogRef.close(true); // Close the dialog and pass 'true' to indicate success
           },
           (error: HttpErrorResponse) => {
             alert(error.message);
           }
       )
     }

     onCancel(): void {
       this.dialogRef.close(false); // Close the dialog and pass 'false' to indicate cancel
     }
   */


}
