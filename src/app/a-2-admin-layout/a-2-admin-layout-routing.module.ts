import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeesStatusComponent } from "./employees-status/employees-status.component";
import { MainComponent } from './main/main.component';
import { AbsenceVerificationsListComponent } from './absence-verifications-list/absence-verifications-list.component';
import { AbsenceRequestsListComponent } from './absence-requests-list/absence-requests-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddNotificationComponent } from './add-notification/add-notification.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DailyRecordComponent } from './daily-record/daily-record.component';
import { WeeklyRecordComponent } from './weekly-record/weekly-record.component';
import { MonthlyRecordComponent } from './monthly-record/monthly-record.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
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
        path: 'daily',
        component:DailyRecordComponent
      },
      {
        path: 'weekly',
        component:WeeklyRecordComponent
      },
      {
        path: 'monthly',
        component:MonthlyRecordComponent
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
