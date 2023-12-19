import {Component, OnInit, TemplateRef} from '@angular/core';
import {Tpe} from "../../model/tpe";
import {TpeService} from "../../service/tpe.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {LocationService} from "../../service/location.service";
import {Locations} from "../../model/locations";
import {Traceability} from "../../model/traceability";
import {TraceabilityService} from "../../service/traceability.service";

declare interface TableData {
    headerRow: any[];
    dataRows: Tpe[][];
    // tracebilityRows: Traceability[][];
}

@Component({
    selector: 'app-tpemanagement',
    templateUrl: './tpemanagement.component.html',
    styleUrls: ['./tpemanagement.component.scss']
})
export class TpeManagementComponent implements OnInit {
    public tpe: Tpe[];
    currentDate: string;
    public selectedTpeId: number;
    public tpemodel: string;
    public serialNumber: number;
    public namePayementProcessor: string;
    public communicationMethod: string;
    public traceability: Traceability[];
    public traceabilityTpe: Traceability[];
    public editTpe: Tpe | null = null;

    // @ts-ignore
    public deleteTpe: Tpe | null = null;
    public tableData1: TableData;
    displayDelete = "none";
    displayEdit = "none";
    displayAdd = "none";
    displayAddStatus = "none";
    displayAddLocation = "none";
    displayTimeLine = "none";

    constructor(
        private tpeService: TpeService,
        private locationService: LocationService,
        private traceabilityService: TraceabilityService
    ) {
    }

    ngOnInit() {
        this.getTpe();
        this.getTraceability();
        const now = new Date();
        const datePart = now.toISOString().split('T')[0];
        this.currentDate = datePart;
    }

    openEdit(row) {
        this.displayEdit = "block";
        this.deleteTpe = row;
        this.tpemodel = row[2];
        this.serialNumber = row[1]
        this.namePayementProcessor = row[3]
        this.communicationMethod = row[4]
    }

    openDelete(row) {
        this.displayDelete = "block";
        this.deleteTpe = row;
    }

    openAdd() {
        this.displayAdd = "block";
    }

    openAddStatus(row) {
        this.displayAddStatus = "block";
        this.selectedTpeId = row[0];
    }

    openAddLocation() {
        this.displayAddLocation = "block";
    }

    openTimeLine(row: any) {
        this.traceabilityService.getTrace(row).subscribe((res: Traceability[]) => {
            console.log('trace response : ')
            console.log(res);
            this.traceabilityTpe = res;
        }, error => {
            console.log('error !!!');
        })
        this.displayTimeLine = "block";
    }

    closepopup() {
        this.displayDelete = "none";
        this.displayEdit = "none";
        this.displayAdd = "none";
        this.displayAddLocation = "none";
        this.displayAddStatus = "none";
        this.displayTimeLine = "none";

    }

    public getTpe(): void {
        this.tpeService.getTpe().subscribe(
            (response: Tpe[]) => {
                this.tpe = response;
                this.tableData1 = {
                    headerRow: ['ID', 'Numéro de Série', 'Modèle', 'Mode de paiement', 'Opérateur'],
                    dataRows: this.tpe.map((tpe) => [
                        tpe?.id.toString(),
                        tpe?.serialNumber,
                        tpe?.model,
                        tpe?.namePaymentProcessor,
                        tpe?.communicationMethod,
                    ])
                };
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }


    public onAddTpe(addForm: NgForm): void {
        document.getElementById('add-tpe-form')?.click();
        this.tpeService.addTpe(addForm.value).subscribe(
            (response: Tpe) => {
                console.log(response);
                this.getTpe();
                addForm.reset();
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
                addForm.reset();
            }
        );
    }

    public onAddTraceability(addstatusForm: NgForm): void {
        document.getElementById('add-tpe-form')?.click();
        this.traceabilityService.addTraceability(addstatusForm.value).subscribe(
            (response: Traceability) => {
                addstatusForm.reset();
                this.displayAddStatus = "none";

            },
            (error: HttpErrorResponse) => {
                alert(error.message);
                addstatusForm.reset();
            }
        );
    }

    public onAddLocation(addLocationForm: NgForm): void {
        document.getElementById('add-tpe-form')?.click();
        this.locationService.addLocation(addLocationForm.value).subscribe(
            (response: Locations) => {
                this.getTpe();
                addLocationForm.reset();
                this.displayAddLocation = "none";

            },
            (error: HttpErrorResponse) => {
                alert(error.message);
                addLocationForm.reset();
            }
        );
    }

    public onUpdateTpe(id: number, tpe: Tpe): void {
        this.tpeService.updateTpe(id, tpe).subscribe(
            (response: Tpe) => {
                this.getTpe();
                this.displayEdit = "none";
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );

    }


    public onDeleteTpe(id: number): void {
        this.tpeService.deleteTpe(id).subscribe(
            (response: void) => {
                console.log('Tpe deleted successfully');
                this.getTpe();
                this.displayDelete = "none";
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

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


}
