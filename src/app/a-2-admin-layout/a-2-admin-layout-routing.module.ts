import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeesStatusComponent } from "./employees-status/employees-status.component";
import { MainComponent } from "./main/main.component";
import { AbsenceVerificationsListComponent } from "./absence-verifications-list/absence-verifications-list.component";
import { AbsenceRequestsListComponent } from "./absence-requests-list/absence-requests-list.component";
import { AddEmployeeComponent } from "./add-employee/add-employee.component";
import { AddNotificationComponent } from "./add-notification/add-notification.component";
import { EditEmployeeComponent } from "./edit-employee/edit-employee.component";
import { EmployeesListComponent } from "./employees-list/employees-list.component";


const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "employees-record",
        loadChildren: () =>
          import("./emplyess-record/emplyess-record.module").then(
            (m) => m.EmplyessRecordModule
          ),
      },
      {
        path: "configuration",
        loadChildren: () =>
          import("./configuration/configuration.module").then(
            (m) => m.ConfigurationModule
          ),
      },
      {
        path: "add-employee",
        component: AddEmployeeComponent,
      },

      {
        path: "employees-status",
        component: EmployeesStatusComponent,
      },
      {
        path: "absence-verifications",
        component: AbsenceVerificationsListComponent,
      },
      {
        path: "absence-requests",
        component: AbsenceRequestsListComponent,
      },
      {
        path: "add-employee",
        component: AddEmployeeComponent,
      },
      {
        path: "add-notification",
        component: AddNotificationComponent,
      },
      {
        path: "edit-employee",
        component: EditEmployeeComponent,
      },
      {
        path: "employees-list",
        component: EmployeesListComponent,
      },

      {
        path: "",
        redirectTo: "employees-status",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class A2AdminLayoutRoutingModule {}
