import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {LocationService} from "../service/location.service";
import {Locations} from "../model/locations";
import {Tpe} from "../model/tpe";
import {TpeService} from "../service/tpe.service";
import {element} from "protractor";

@Component({
    selector: 'app-maps',
    templateUrl: './maps.component.html',
    styleUrls: ['./maps.component.css']
})

export class MapsComponent {
    public locationtpeid: Locations;
    public location: Locations[];
    public tpeid: Tpe;
    public tpe: Tpe[];
    labelText;

    constructor(private locationService: LocationService, private tpeService: TpeService) {
    }

    ngOnInit() {
        this.getLocation();
        // console.log(this.getLocation());

// this.gettpename();
    }

    public getTpe(): void {
        this.tpeService.getTpe().subscribe(
            (response: Tpe[]) => {
                this.tpe = response;
                console.log(this.tpe);
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }

    /*  public gettpename(): void {
        if(this.tpeid.id === this.location.map(element)){
          this.labelText="TPE: " + this.tpeid.model + "SerialNumber: " + this.tpeid.serialNumber;
        }
        this.tpeService.getTpe().subscribe(

            (response:Tpe[]) => {
              this.tpe = response;

              // console.log(this.tpe);
            },
            (error:HttpErrorResponse) => {
              alert(error.message);
            }
        )

      }*/


    public getLocation(): void {
        this.locationService.getLocation().subscribe(
            // @ts-ignore

            (response: Location[]) => {
                // @ts-ignore

                this.location = response;
                console.log(this.locationtpeid)
                // console.log(this.location);
            },
            (error: HttpErrorResponse) => {
                alert(error.message);
            }
        );
    }
}
