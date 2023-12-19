import {Component, OnInit} from '@angular/core';
import {Storage} from "../../model/storage";
import {StockedTpe} from "../../model/StockedTpe";
import {StorageService} from "../../service/storage.service";
import {StockedTpeService} from "../../service/stockedTpe.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Store} from "../../model/store";
import {Tpe} from "../../model/tpe";
import {TpeService} from "../../service/tpe.service";

declare interface Allstocked {
    idstockedtpe: any;
    idtpe: any;
    serialNumber: number;
    idtorage: any;
    etagere: string;
    rayon: string;
    range: string;
}

@Component({
    selector: 'app-stocktpe',
    templateUrl: './stocktpe.component.html',
    styleUrls: ['./stocktpe.component.scss']
})
export class StocktpeComponent implements OnInit {
    public stockedTpe: StockedTpe[];
    public storage: Storage[];
    public tpe: Tpe[];
    public combinedStockedData: any[] = [];
    public deleteStockedTpe: StockedTpe | null = null;
    public idofstockedtpe: number;
    public selectedStorageId: number;
    public selectedTpeId: number;
    public selectedTpe: {};
    public selectedStorage: {};

    displayAddStockedTPe = "none";

    constructor(private storageService: StorageService,
                private stockedTpeService: StockedTpeService,
                private tpeService: TpeService,
    ) {
    }

    ngOnInit(): void {
        this.getTpe(); // Fetch Tpe data
        this.getStokedTpe();
        this.getStorage();
    }

    openAddStockeTpe() {
        this.displayAddStockedTPe = "block";

    }

    getStokedTpe() {
        // this function gets the list of all the KITS
        this.stockedTpeService.getstockedTpe().subscribe(
            (response: any) => {
                this.combinedStockedData = response;
                // this.combineData();
                // this.Kit();


            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    onDeletestockedtpe(datas): void {
        this.deleteStockedTpe = datas;
        console.log(datas);
        this.stockedTpeService.deletestockedTpe(datas.id).subscribe(
            res => {
                this.combinedStockedData = this.combinedStockedData.filter(storage => storage.id !== datas.id)
            }
        )

    }

    closepopup() {
        this.displayAddStockedTPe = "none";

    }


    public StockedTpe() {
        const stockedTpe = {tpe: this.selectedTpe, storage: this.selectedStorage}
        let stockedTpe1: StockedTpe = {
            id: this.idofstockedtpe,
            storage: this.selectedStorageId,
            tpe: this.selectedTpeId
        }
        // endpoint call, push to backend
        this.stockedTpeService.poststockedTpe(stockedTpe1).subscribe(
            response => {
                //this.on
                this.combinedStockedData.push(response)

            },
        )
        this.combinedStockedData.push(stockedTpe)
    }

    public getStorage(): void {
        this.storageService.getStorage().subscribe(
            (response: Storage[]) => {
                this.storage = response;
                this.combineStockedData();
                console.log(this.storage);

            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public getTpe(): void {
        this.tpeService.getTpe().subscribe(
            (response: Tpe[]) => {
                this.tpe = response;
                this.combineStockedData();

            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }


    public getTpeById(): void {
        this.tpeService.getTpeById(this.selectedTpeId).subscribe(
            (response: any) => {
                this.selectedTpe = response
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }


    public getStorageById(): void {
        this.storageService.getStorageById(this.selectedStorageId).subscribe(
            (response: any) => {
                this.selectedStorage = response
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }


    public combineStockedData(): void {
        if (this.tpe && this.storage) {
            this.combinedStockedData = [];

            // Assuming tpe, sims, consumables, and stores have the same length
            for (let i = 0; i < this.tpe.length; i++) {
                if (this.selectedTpeId && this.selectedStorageId) {
                    const combinedStockedEntry: Allstocked = {
                        idstockedtpe: this.stockedTpe[i].id,
                        idtpe: this.tpe[i].id,
                        serialNumber: this.tpe[i].serialNumber,
                        idtorage: this.storage[i].id,
                        etagere: this.storage[i].etagere,
                        rayon: this.storage[i].rayon,
                        range: this.storage[i].range
                    };

                    this.combinedStockedData.push(combinedStockedEntry);
                }
            }
        }
    }
}
