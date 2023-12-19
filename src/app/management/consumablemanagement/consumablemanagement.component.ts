import {Component, OnInit} from '@angular/core';
import {Sim} from '../../model/sim';
import {UserService} from '../../service/users.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {SimService} from "../../service/sim.service";
import {ConsumableService} from "../../service/consumable.service";
import {Consumable} from "../../model/consumable";

declare interface TableData {
    headerRow: string[];
    dataRows: Sim[][];
}

@Component({
    selector: 'app-consumablemanagement',
    templateUrl: './consumablemanagement.component.html',
    styleUrls: ['./consumablemanagement.component.css'],
})
export class ConsumableManagementComponent implements OnInit {
    // @ts-ignore
    public consumables: Consumable[];
    public deleteConsumable: Consumable | null = null;
    public tableData1: TableData;
    public productName: string;
    public brandName: string;
    public supplierInformation: string;
    public quantity: number;
    public category: string;
    public cost: number;

    displayDelete = 'none';
    displayEdit = 'none';
    displayAdd = 'none';

    constructor(private consumableService: ConsumableService) {
    }

    ngOnInit() {
        this.getConsumable();
    }

    OpenEdit(row) {
        this.displayEdit = 'block';
        this.deleteConsumable = row;
        this.productName = row[1];
        this.brandName = row[2];
        this.supplierInformation = row[3];
        this.quantity = row[4];
        this.category = row[5];
        this.cost = row[6];
    }

    Opendelete(row) {
        this.displayDelete = 'block';
        this.deleteConsumable = row;
    }

    OpenAdd() {
        this.displayAdd = 'block';
    }

    closepopup() {
        this.displayDelete = 'none';
        this.displayEdit = 'none';
        this.displayAdd = 'none';
    }

    public getConsumable(): void {
        this.consumableService.getConsumables().subscribe(
            (response: Consumable[]) => {
                this.consumables = response;
                console.log(this.consumables);
                this.tableData1 = {
                    headerRow: ['ID', 'Nom Produit', 'Marque', 'Fournisseur', " Quantité", "Catégorie", "Prix"],
                    dataRows: this.consumables.map((consumable) => [
                        consumable?.id,
                        consumable?.productName,
                        consumable?.brandName,
                        consumable?.supplierInformation,
                        consumable?.quantity,
                        consumable?.category,
                        consumable?.cost,
                    ]),
                };
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public onAddConsumable(addForm: NgForm): void {
        document.getElementById('add-users-form')?.click();
        this.consumableService.addConsumable(addForm.value).subscribe(
            (response: Consumable) => {
                console.log(response);
                this.getConsumable();
                addForm.reset();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
                addForm.reset();
            }
        );
    }

    public onUpdateConsumable(id: number, conslumable: Consumable): void {
        this.consumableService.updateConsumable(id, conslumable).subscribe(
            (response: Consumable) => {
                console.log(response);
                this.getConsumable();
                this.displayEdit = 'none';
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public onDeleteConsumbale(id: number): void {
        this.consumableService.deleteConsumable(id).subscribe(
            (response: void) => {
                console.log('User deleted successfully');
                this.getConsumable();
                this.displayDelete = 'none';
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }


}
