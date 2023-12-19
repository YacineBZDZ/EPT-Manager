import {Component} from '@angular/core';
import {Tpe} from '../../model/tpe';
import {TpeService} from '../../service/tpe.service';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {Storage} from '../../model/storage';
import {StorageService} from '../../service/storage.service';

declare interface TableData {
    headerRow: string[];
    dataRows: any[][];
}


@Component({
    selector: 'app-storagemanagement',
    templateUrl: './storagemanagement.component.html',
    styleUrls: ['./storagemanagement.component.css']
})
export class StoragemanagementComponent {
    // @ts-ignore
    public storage: Storage[];
    public editStorage: Storage | null = null;
    public deleteStorage: Storage | null = null;
    public tableData1: TableData;
    displayDelete = "none";
    displayEdit = "none";
    displayAdd = "none";
    etagere: string;
    rayon: string;
    range: string;

    constructor(private storageService: StorageService) {
    }

    ngOnInit() {
        this.getStorage();
    }


    OpenEdit(row) {
        this.displayEdit = "block";
        this.deleteStorage = row;
        this.etagere = row[1];
        this.rayon = row[2];
        this.range = row[3];
    }

    Opendelete(row) {
        this.displayDelete = "block";
        this.deleteStorage = row;
    }

    OpenAdd() {
        this.displayAdd = "block";
    }

    closepopup() {
        this.displayDelete = "none";
        this.displayEdit = "none";
        this.displayAdd = "none";
    }

    public getStorage(): void {
        this.storageService.getStorage().subscribe(
            (response: Storage[]) => {
                this.storage = response;
                console.log(this.storage);

                this.tableData1 = {
                    headerRow: ['ID', 'Rayons', 'Etagères', 'Rangées'],
                    dataRows: this.storage.map(storages => [
                        storages?.id,
                        storages?.rayon,
                        storages?.etagere,
                        storages?.range,

                    ])
                };
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public onAddStorage(addForm: NgForm): void {
        document.getElementById('add-tpe-form')?.click();
        this.storageService.addStorage(addForm.value).subscribe(
            (response: Storage) => {
                console.log(response);
                this.getStorage();
                addForm.reset();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
                addForm.reset();
            }
        );
    }

    public onUpdateStorage(id: number, storage: Storage): void {
        this.storageService.updateStorage(id, storage).subscribe(
            (response: Storage) => {
                console.log(response);
                this.getStorage();
                this.displayEdit = "none";

            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public onDeleteStorage(storageId: number | null): void {
        if (storageId != null) {
            this.storageService.deleteStorage(storageId).subscribe(
                (response: void) => {
                    console.log('Storage deleted successfully');
                    this.getStorage();
                    this.displayDelete = "none";

                },
                (error: HttpErrorResponse) => {
                    alert(error.message);
                }
            );
        }
    }


}
