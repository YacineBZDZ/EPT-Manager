import {Component, OnInit} from '@angular/core';
import {Store} from "../../model/store";
import {StoreService} from "../../service/store.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

declare interface TableData {
    headerRow: any[];
    dataRows: any[][];
}

@Component({
    selector: 'app-storemanagement',
    templateUrl: './storemanagement.component.html',
    styleUrls: ['./storemanagement.component.css']
})
export class StoremanagementComponent implements OnInit {
    public stores: Store[]; // renamed users to stores
    public editStore: Store | null = null; // renamed editUsers to editStore
    public deleteStore: Store | null = null; // renamed deleteUser to deleteStore
    public tableData1: TableData;
    public name1: string;
    public address: string;
    public typeStoreStr: string; // renamed typeUserStr to typeStoreStr

    displayDelete = "none";
    displayEdit = "none";
    displayAdd = "none";

    constructor(private storeService: StoreService) {
    }

    ngOnInit() {
        this.getStore();
    }

    OpenEdit(row) {
        this.displayEdit = "block";
        this.deleteStore = row;
        this.name1 = row[1];
        this.typeStoreStr = row[2];
        this.address = row[3];
    }

    Opendelete(row) {
        this.displayDelete = "block";
        this.deleteStore = row;
    }

    OpenAdd() {
        this.displayAdd = "block";
    }

    closepopup() {
        this.displayDelete = "none";
        this.displayEdit = "none";
        this.displayAdd = "none";
    }

    public getStore(): void {
        this.storeService.getStore().subscribe(
            (response: Store[]) => {
                this.stores = response;
                console.log(this.stores);
                this.tableData1 = {
                    headerRow: ['ID', 'Nom du Magasin', 'Type de Magasin', 'Adresse'],
                    dataRows: this.stores.map(store => [
                        store?.id,
                        store?.storeName,
                        store?.storeCategories, // renamed typeUserStr to typeStoreStr
                        store.storeAddress
                    ])
                };
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public onAddStore(addForm: NgForm): void {
        document.getElementById('add-stores-form')?.click();
        this.storeService.addStore(addForm.value).subscribe(
            (response: Store) => {
                console.log(response);
                this.getStore();
                addForm.reset();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
                addForm.reset();
            }
        );
    }

    public onUpdateStore(id: number, store: Store): void {
        this.storeService.updateStore(id, store).subscribe(
            (response: Store) => {
                console.log(response);
                this.getStore();
                this.displayEdit = "none";
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        )
    }

    public onDeleteStore(id: number): void {
        this.storeService.deleteStore(id).subscribe(
            (response: void) => {
                console.log('Store deleted successfully');
                this.getStore();
                this.displayDelete = "none";
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }


}
