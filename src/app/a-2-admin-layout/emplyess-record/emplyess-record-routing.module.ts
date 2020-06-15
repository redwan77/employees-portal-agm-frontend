import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DailyRecordComponent } from "./daily-record/daily-record.component";
import { WeeklyRecordComponent } from "./weekly-record/weekly-record.component";
import { MonthlyRecordComponent } from "./monthly-record/monthly-record.component";
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "daily",
        component: DailyRecordComponent,
      },
      {
        path: "weekly",
        component: WeeklyRecordComponent,
      },
      {
        path: "monthly",
        component: MonthlyRecordComponent,
      },
      {
        path: "",
        redirectTo: "daily",
        pathMatch: "full",
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmplyessRecordRoutingModule {}
