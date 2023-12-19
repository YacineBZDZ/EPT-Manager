import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Locations} from "../model/locations";

@Injectable({providedIn: 'root'})
export class LocationService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) {
    }

    public getLocation(): Observable<Locations[]> {
        return this.http.get<Locations[]>(`${this.apiServerUrl}/api/v1/user/location/all`);
    }

    public addLocation(location: Locations): Observable<Locations> {
        return this.http.post<Locations>(`${this.apiServerUrl}/api/v1/user/location/add`, location);
    }

    public updateLocation(location: Locations): Observable<Locations> {
        return this.http.put<Locations>(`${this.apiServerUrl}/api/v1/user/location/update`, location);
    }

    public deleteLocation(locationId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/v1/user/location/delete/${locationId}`);
    }
}
