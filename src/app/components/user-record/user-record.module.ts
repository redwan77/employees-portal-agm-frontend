import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRecordRoutingModule } from './user-record-routing.module';
import { DailyRecordComponent } from './daily-record/daily-record.component';
import { WeeklyRecordComponent } from './weekly-record/weekly-record.component';
import { MonthlyRecordComponent } from './monthly-record/monthly-record.component';
import { UserRecordComponent } from './user-record.component';

@NgModule({
  declarations: [
    DailyRecordComponent,
    WeeklyRecordComponent,
    MonthlyRecordComponent,
    UserRecordComponent],
  imports: [
    CommonModule,
    UserRecordRoutingModule
  ],
  bootstrap: [UserRecordComponent]
})
export class UserRecordModule {
  constructor() {
    console.log('hhhh');
  }
}
