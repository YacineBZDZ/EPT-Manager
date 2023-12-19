import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LbdModule} from '../../lbd/lbd.module';
import {NguiMapModule} from '@ngui/map';

import {AdminLayoutRoutes} from './admin-layout.routing';

import {HomeComponent} from '../../home/home.component';
import {UserComponent} from '../../user/user.component';
import {TablesComponent} from '../../tables/tables.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';
import {FileComponent} from "../../file/file.component";
import {BankmanagementComponent} from "../../management/bankmanagement/bankmanagement.component";
import {TpeManagementComponent} from "../../management/tpemanagement/tpemanagement.component";
import {StoremanagementComponent} from "../../management/storemanagement/storemanagement.component";
import {EmailokComponent} from "../../forgotpass/emailok/emailok.component";
import {SimmanagementComponent} from "../../management/simmanagement/simmanagement.component";
import {StoragemanagementComponent} from "../../management/storagemanagement/storagemanagement.component";
import {UsermanagementComponent} from "../../management/usermanagement/usermanagement.component";
import {EditUserComponent} from "../../management/edituser/edituser.component";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatRadioModule} from "@angular/material/radio";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTableModule} from "@angular/material/table";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {TraceabilityComponent} from "../../management/traceability/traceability.component";
import {ConsumableManagementComponent} from "../../management/consumablemanagement/consumablemanagement.component";
import {TestManagementComponent} from "../../management/testmanagment/testmanagment.component";
import {BrandsComponent} from "../../management/brands/brands.component";
import {StocktpeComponent} from "../../management/stocktpe/stocktpe.component";

// import {ModalModule} from "ngx-bootstrap";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        // ModalModule.forRoot(),
        FormsModule,
        LbdModule,
        NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCSvfV8av5JNj_PB4t1Vrv8X0Z7U7UDXe0'}),
        ReactiveFormsModule,
        MatSelectModule,
        MatDatepickerModule,
        MatRadioModule,
        MatDialogModule,
        MatTableModule,
        MatToolbarModule,
        MatIconModule,
        MatPaginatorModule
    ],
    exports: [
        UsermanagementComponent
    ],
    declarations: [
        HomeComponent,
        UserComponent,
        TablesComponent,
        TypographyComponent,
        IconsComponent,
        MapsComponent,
        NotificationsComponent,
        UpgradeComponent,
        FileComponent,
        TpeManagementComponent,
        BankmanagementComponent,
        StoremanagementComponent,
        EmailokComponent,
        SimmanagementComponent,
        StoragemanagementComponent,
        TestManagementComponent,
        BrandsComponent,
        UsermanagementComponent,
        EditUserComponent,
        TraceabilityComponent,
        ConsumableManagementComponent,
        StocktpeComponent

    ],
})

export class AdminLayoutModule {
}

