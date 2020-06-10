import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DailyRecordComponent } from './daily-record/daily-record.component';
import { WeeklyRecordComponent } from './weekly-record/weekly-record.component';
import { MonthlyRecordComponent } from './monthly-record/monthly-record.component';
import { UserRecordComponent } from './user-record.component';

const routes: Routes = [
   {
    path:'',
    component: UserRecordComponent,
    children: [
      {
        path: '',
        component: DailyRecordComponent
      },
      {
        path: 'weekly-record',
        component: WeeklyRecordComponent
      },
      {
        path: 'monthly-record',
        component: MonthlyRecordComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]  
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRecordRoutingModule { }
