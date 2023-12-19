import {Component, OnInit} from '@angular/core';
import {Sim} from '../../model/sim';
import {UserService} from '../../service/users.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {SimService} from "../../service/sim.service";

declare interface TableData {
    headerRow: string[];
    dataRows: Sim[][];
}

@Component({
    selector: 'app-simmanagement',
    templateUrl: './simmanagement.component.html',
    styleUrls: ['./simmanagement.component.css'],
})
export class SimmanagementComponent implements OnInit {
    public sims: Sim[];
    public editUsers: Sim | null = null;
    public deleteSim: Sim | null = null;
    public tableData1: TableData;
    public imsi: string;
    public type: string;
    public phoneNumber: string;
    public serviceProvider: string;
    public subscription: string;

    displayDelete = 'none';
    displayEdit = 'none';
    displayAdd = 'none';

    constructor(private simService: SimService) {
    }

    ngOnInit() {
        this.getSim();
    }

    OpenEdit(row) {
        this.displayEdit = 'block';
        this.deleteSim = row;
        this.imsi = row[1];
        this.type = row[2];
        this.phoneNumber = row[3];
        this.serviceProvider = row[4];
        this.subscription = row[5];
    }

    Opendelete(row) {
        this.displayDelete = 'block';
        this.deleteSim = row;
    }

    OpenAdd() {
        this.displayAdd = 'block';
    }

    closepopup() {
        this.displayDelete = 'none';
        this.displayEdit = 'none';
        this.displayAdd = 'none';
    }

    public getSim(): void {
        this.simService.getSim().subscribe(
            (response: Sim[]) => {
                this.sims = response;
                console.log(this.sims);
                this.tableData1 = {
                    headerRow: ['ID', 'IMSI', 'Type de Sim', 'Numéro de téléphone', "Fournisseur D'accès", "Abonnement"],
                    dataRows: this.sims.map((sim) => [
                        sim?.id,
                        sim?.imsi,
                        sim?.type,
                        sim?.phoneNumber,
                        sim?.serviceProvider,
                        sim?.subscription,
                    ]),
                };
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public onAddSim(addForm: NgForm): void {
        document.getElementById('add-users-form')?.click();
        this.simService.addSim(addForm.value).subscribe(
            (response: Sim) => {
                console.log(response);
                this.getSim();
                addForm.reset();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
                addForm.reset();
            }
        );
    }

    public onUpdateSim(id: number, sim: Sim): void {
        this.simService.updateSim(id, sim).subscribe(
            (response: Sim) => {
                console.log(response);
                this.getSim();
                this.displayEdit = 'none';
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public onDeleteSim(id: number): void {
        this.simService.deleteSim(id).subscribe(
            (response: void) => {
                console.log('User deleted successfully');
                this.getSim();
                this.displayDelete = 'none';
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }


}
