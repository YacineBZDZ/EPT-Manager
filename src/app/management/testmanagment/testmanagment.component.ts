import {Component, OnInit} from '@angular/core';
import {Sim} from "../../model/sim";
import {TpeService} from "../../service/tpe.service";
import {SimService} from "../../service/sim.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Tpe} from "../../model/tpe";
import {NgForm} from "@angular/forms";
import {Traceability} from "../../model/traceability";
import {data} from "jquery";
import {Consumable} from "../../model/consumable";
import {ConsumableService} from "../../service/consumable.service";
import {Store} from "../../model/store";
import {StoreService} from "../../service/store.service";
import {KitService} from "../../service/kit.service";
import {Kit} from "../../model/Kit";
import {Users} from "../../model/users";
import {TraceabilityService} from "../../service/traceability.service";
import {Storage} from "../../model/storage";
import {StorageService} from "../../service/storage.service";
import {StockedTpe} from "../../model/StockedTpe";
import {StockedTpeService} from "../../service/stockedTpe.service";

declare interface AllDataStatus {
    idkit: any;
    idtpe: any;
    serialNumber: number;
    model: string;
    namePaymentProcessor: string;
    communicationMethod: string;
    idsim: any;
    imsi: string;
    phoneNumber: number | null;
    type: string;
    serviceProvider: string;
    idstore: any;
    storeName: string;
    idconsumable: any;
    productName: string;


}


@Component({
    selector: 'app-testmanagment',
    templateUrl: './testmanagment.component.html',
    styleUrls: ['./testmanagment.component.scss']
})
export class TestManagementComponent implements OnInit {
    public consumables: Consumable[];
    public sims: Sim[];
    public tpe: Tpe[];
    public kit: Kit[];
    public combinedData: any[] = [];
    public stores: Store[]; // renamed users to stores
    public deleteKit: Kit | null = null;


    public selectedTpeId: number;
    public selectedSIMId: number;
    public selectedConsomId: number;
    public selectedStoreId: number;
    public selectedStorageId: number;
    public idofkit: number;
    public idofstockedtpe: number;

    public selectedTpe: {};
    public selectedSIM: {};
    public selectedConsom: {};
    public selectedStore: {};
    public selectedStorage: {};

    displayEdit = "none";
    displayAddStockedTPe = "none";
    displayDelete = "none";
    displayAddStatus = "none";


    constructor(
        private storeService: StoreService,
        private tpeService: TpeService,
        private simService: SimService,
        private consumableService: ConsumableService,
        private kitService: KitService,
        private traceabilityService: TraceabilityService,
    ) {
    }

    ngOnInit(): void {
        this.getTpe(); // Fetch Tpe data
        this.getSim(); // Fetch Sim data
        this.getStore(); // Fetch Sim data
        this.getConsumable(); // Fetch Sim data
        this.getKITs();

    }


    openEdit() {
        this.displayEdit = "block";

    }

    openAddStockeTpe() {
        this.displayAddStockedTPe = "block";

    }

    Opendelete(data) {
        this.displayDelete = "block";
        this.deleteKit = data;
        console.log(data);
        this.kitService.deleteKit(data.id).subscribe(
            res => {
                this.combinedData = this.combinedData.filter(kit => kit.id !== data.id)
            }
        )

    }

    getKITs() {
        // this function gets the list of all the KITS
        this.kitService.getKit().subscribe(
            (response: any) => {
                this.combinedData = response;
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }


    closepopup() {
        this.displayEdit = "none";
        this.displayDelete = "none";
        this.displayAddStockedTPe = "none";

    }

    public Kit() {
        const kit = {
            tpe: this.selectedTpe,
            sim: this.selectedSIM,
            conso: this.selectedConsom,
            store: this.selectedStore
        }
        let kit2: Kit = {
            id: this.idofkit,
            conso: this.selectedConsomId,
            sim: this.selectedSIMId,
            store: this.selectedStoreId,
            tpe: this.selectedTpeId
        }
        // endpoint call, push to backend
        this.kitService.postKit(kit2).subscribe(
            response => {
                //this.on
                this.combinedData.push(response)

            },
        )
        this.combinedData.push(kit)
    }


    public getStore(): void {
        this.storeService.getStore().subscribe(
            (response: Store[]) => {
                this.stores = response;
                this.combineData();
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
                this.combineData();
                // this.combineStockedData();

            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }


    public getConsumable(): void {
        this.consumableService.getConsumables().subscribe(
            (response: Consumable[]) => {
                this.consumables = response;
                this.combineData();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }


    public getSim(): void {
        this.simService.getSim().subscribe(
            (response: Sim[]) => {
                this.sims = response;
                this.combineData();
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


    public getSimById(): void {
        this.simService.getSimById(this.selectedSIMId).subscribe(
            (response: any) => {
                this.selectedSIM = response
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public getConsumablesById(): void {
        this.consumableService.getConsumablesById(this.selectedConsomId).subscribe(
            (response: any) => {
                this.selectedConsom = response
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }


    public getStoreById(): void {
        this.storeService.getStoreById(this.selectedStoreId).subscribe(
            (response: any) => {
                this.selectedStore = response
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }


    public onAddTraceability(formData: any): void {
        this.traceabilityService.addTraceability(formData).subscribe(
            (response: Traceability) => {


            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    public combineData(): void {
        if (this.tpe && this.sims && this.consumables && this.stores) {
            this.combinedData = [];

            // Assuming tpe, sims, consumables, and stores have the same length
            for (let i = 0; i < this.tpe.length; i++) {
                if (this.selectedTpeId && this.selectedConsomId && this.selectedSIMId) {
                    const combinedEntry: AllDataStatus = {
                        idkit: this.kit[i].id,
                        idtpe: this.tpe[i].id,
                        serialNumber: this.tpe[i].serialNumber,
                        model: this.tpe[i].model,
                        namePaymentProcessor: this.tpe[i].namePaymentProcessor,
                        communicationMethod: this.tpe[i].communicationMethod,
                        idsim: this.sims[i].id,
                        imsi: this.sims[i].imsi,
                        phoneNumber: this.sims[i].phoneNumber,
                        type: this.sims[i].type,
                        serviceProvider: this.sims[i].serviceProvider,
                        idstore: this.stores[i]?.id,
                        storeName: this.stores[i].storeName,
                        idconsumable: this.consumables[i]?.id,
                        productName: this.consumables[i]?.productName
                    };

                    this.combinedData.push(combinedEntry);
                }
            }
        }
    }


}
