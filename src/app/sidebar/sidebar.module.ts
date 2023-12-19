import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SidebarComponent} from './sidebar.component';
import {EditUserComponent} from "../management/edituser/edituser.component";
import {UsermanagementComponent} from "../management/usermanagement/usermanagement.component";

@NgModule({
    imports: [RouterModule, CommonModule],
    declarations: [SidebarComponent,

    ],
    exports: [SidebarComponent]
})

export class SidebarModule {
}
