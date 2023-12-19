import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/users.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {BankService} from "../../service/bank.service";
import {Bank} from "../../model/bank";

declare interface TableData {
    headerRow: string[];
    dataRows: Bank[][];
}

@Component({
    selector: 'app-bankmanagement',
    templateUrl: './bankmanagement.component.html',
    styleUrls: ['./bankmanagement.component.scss'],
})
export class BankmanagementComponent implements OnInit {
    // @ts-ignore
    public banks: Bank[];
    public editUsers: Bank | null = null;
    public deleteBank: Bank | null = null;
    public tableData1: TableData;
    public bankName: string;
    public agencyAddress: string;
    public phoneNumber: number;
    public bankEmail: string;
    public serviceOffered: string;


    displayDelete = 'none';
    displayEdit = 'none';
    displayAdd = 'none';

    constructor(private bankService: BankService) {
    }

    ngOnInit() {
        this.getBank();
    }

    OpenEdit(row) {
        this.displayEdit = 'block';
        this.deleteBank = row;
        this.bankName = row[1];
        this.bankEmail = row[2];
        this.agencyAddress = row[3];
        this.phoneNumber = row[4];
        this.serviceOffered = row[5];
    }

    Opendelete(row) {
        this.displayDelete = 'block';
        this.deleteBank = row;
    }

    OpenAdd() {
        this.displayAdd = 'block';
    }

    closepopup() {
        this.displayDelete = 'none';
        this.displayEdit = 'none';
        this.displayAdd = 'none';
    }

    public getBank(): void {
        this.bankService.getBank().subscribe(
            (response: Bank[]) => {
                this.banks = response;
                console.log(this.banks);
                this.tableData1 = {
                    headerRow: ['ID', 'Nom Banque', 'Email', "Adresse", 'Numéro de téléphone', 'Service'],
                    dataRows: this.banks.map((bank) => [
                        bank?.id,
                        bank?.bankName,
                        bank?.bankEmail,
                        bank?.agencyAddress,
                        bank?.phoneNumber,
                        bank?.serviceOffered,
                    ]),
                };
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public onAddBank(addForm: NgForm): void {
        document.getElementById('add-users-form')?.click();
        this.bankService.addBank(addForm.value).subscribe(
            (response: Bank) => {
                console.log(response);
                this.getBank();
                addForm.reset();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
                addForm.reset();
            }
        );
    }

    public onUpdateBank(id: number, sim: Bank): void {
        this.bankService.updateBank(id, sim).subscribe(
            (response: Bank) => {
                console.log(response);
                this.getBank();
                this.displayEdit = 'none';
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public onDeleteBank(id: number): void {
        this.bankService.deleteBank(id).subscribe(
            (response: void) => {
                console.log('User deleted successfully');
                this.getBank();
                this.displayDelete = 'none';
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }


}
