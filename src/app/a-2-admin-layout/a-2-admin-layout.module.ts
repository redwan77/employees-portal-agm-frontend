import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { A2AdminLayoutRoutingModule } from "./a-2-admin-layout-routing.module";
import { NavbarAdminComponent } from "./navbar-admin/navbar-admin.component";
import { SidebarAdminComponent } from "./sidebar-admin/sidebar-admin.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { AddNotificationComponent } from "./add-notification/add-notification.component";
import { AbsenceRequestsListComponent } from "./absence-requests-list/absence-requests-list.component";
import { EmployeesStatusComponent } from "./employees-status/employees-status.component";
import { AbsenceVerificationsListComponent } from "./absence-verifications-list/absence-verifications-list.component";
import { MainComponent } from "./main/main.component";

import { EmployeesListComponent } from './employees-list/employees-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarAdminComponent,
    SidebarAdminComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    AddNotificationComponent,
    AbsenceRequestsListComponent,
    EmployeesStatusComponent,
    AbsenceVerificationsListComponent,
    MainComponent,
    EmployeesListComponent,
  ],
  imports: [CommonModule,
    FormsModule,
    ReactiveFormsModule,
    A2AdminLayoutRoutingModule],
})
export class A2AdminLayoutModule { }
