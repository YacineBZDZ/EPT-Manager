import {Routes} from '@angular/router';

import {HomeComponent} from '../../home/home.component';
import {UserComponent} from '../../user/user.component';
import {TablesComponent} from '../../tables/tables.component';
import {TypographyComponent} from '../../typography/typography.component';
import {IconsComponent} from '../../icons/icons.component';
import {MapsComponent} from '../../maps/maps.component';
import {NotificationsComponent} from '../../notifications/notifications.component';
import {UpgradeComponent} from '../../upgrade/upgrade.component';
import {UsermanagementComponent} from "../../management/usermanagement/usermanagement.component";
import {TraceabilityComponent} from "../../management/traceability/traceability.component";
import {TpeManagementComponent} from "../../management/tpemanagement/tpemanagement.component";
import {HasRoleBankGuard} from "../../helpers/has-roleBank.guard";
import {AuthGuard} from "../../helpers/auth.guard";
import {HasRoleAdminGuard} from "../../helpers/has-role-admin.guard";
import {StoremanagementComponent} from "../../management/storemanagement/storemanagement.component";
import {FileComponent} from "../../file/file.component";
import {SimmanagementComponent} from "../../management/simmanagement/simmanagement.component";
import {BankmanagementComponent} from "../../management/bankmanagement/bankmanagement.component";
import {ConsumableManagementComponent} from "../../management/consumablemanagement/consumablemanagement.component";
import {BrandsComponent} from "../../management/brands/brands.component";
import {TestManagementComponent} from "../../management/testmanagment/testmanagment.component";
import {StoragemanagementComponent} from "../../management/storagemanagement/storagemanagement.component";
import {StocktpeComponent} from "../../management/stocktpe/stocktpe.component";

export const AdminLayoutRoutes: Routes = [
    {path: 'dashboard', component: HomeComponent},
    {path: 'user', component: UserComponent},
    {path: 'table', component: TablesComponent},
    {path: 'typography', component: TypographyComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'upgrade', component: UpgradeComponent},
    {path: 'status', component: TraceabilityComponent},
    {path: 'usermanagement', component: UsermanagementComponent, canActivate: [AuthGuard]},
    {path: 'storemanagement', component: StoremanagementComponent, canActivate: [AuthGuard]},
    {path: 'tpemanagement', component: TpeManagementComponent, canActivate: [AuthGuard]},
    {path: 'test', component: TestManagementComponent, canActivate: [AuthGuard]},
    {path: 'simmanagement', component: SimmanagementComponent, canActivate: [AuthGuard]},
    {path: 'bankmanagement', component: BankmanagementComponent, canActivate: [AuthGuard]},
    {path: 'consumablemanagement', component: ConsumableManagementComponent, canActivate: [AuthGuard]},
    {path: 'storagemanagement', component: StoragemanagementComponent, canActivate: [AuthGuard]},
    {path: 'stocktpecomponent', component: StocktpeComponent, canActivate: [AuthGuard]},
    {path: 'file', component: FileComponent, canActivate: [HasRoleBankGuard, AuthGuard]},
    {path: 'brandsComponent', component: BrandsComponent, canActivate: [AuthGuard]},


];
