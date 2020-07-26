import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { A1UserLayoutRoutingModule } from './a-1-user-layout-routing.module';
import { MainComponent } from './main/main.component';
import { FlagComponent } from './flag/flag.component';
import { NavbarUserComponent } from './navbar-user/navbar-user.component';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { WeeklyRecordComponent } from './weekly-record/weekly-record.component';
import { MonthlyRecordComponent } from './monthly-record/monthly-record.component';
import { DailyRecordComponent } from './daily-record/daily-record.component';
import { OptionsListComponent } from './options-list/options-list.component';
import { AbsenceRequestComponent } from './absence-request/absence-request.component';
import { AbsenceVerificationComponent } from './absence-verification/absence-verification.component';
import { RecordHeaderComponent } from './record-header/record-header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NotificationesComponent } from './notificationes/notificationes.component';

@NgModule({
  declarations: [
    MainComponent,
    FlagComponent, NavbarUserComponent,
    DigitalClockComponent,
    WeeklyRecordComponent,
    MonthlyRecordComponent,
    DailyRecordComponent,
    OptionsListComponent,
    AbsenceRequestComponent,
    AbsenceVerificationComponent,
    RecordHeaderComponent,
    NotificationesComponent
    ],
  imports: [
    CommonModule,
    A1UserLayoutRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [MainComponent]
})
export class A1UserLayoutModule { }
