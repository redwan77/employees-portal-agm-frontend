import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { AbsenceVerificationComponent } from './absence-verification/absence-verification.component';
import { AbsenceRequestComponent } from './absence-request/absence-request.component';
import { DailyRecordComponent } from './daily-record/daily-record.component';
import { WeeklyRecordComponent } from './weekly-record/weekly-record.component';
import { MonthlyRecordComponent } from './monthly-record/monthly-record.component';
import { MainComponent } from './main/main.component';
import { OptionsListComponent } from './options-list/options-list.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path: 'home',
        component:DigitalClockComponent
      },
      {
        path: 'absence-verification',
        component:AbsenceVerificationComponent
      },
      {
        path: 'absence-request',
        component:AbsenceRequestComponent
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
        path: 'options',
        component:OptionsListComponent
      }
      {
        path: '**',
        redirectTo:'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class A1UserLayoutRoutingModule { }
