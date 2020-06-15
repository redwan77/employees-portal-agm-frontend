import { NgModule } from '@angular/core';
import { DailyRecordComponent } from './daily-record/daily-record.component';
import { MonthlyRecordComponent } from './monthly-record/monthly-record.component';
import { WeeklyRecordComponent } from './weekly-record/weekly-record.component';
import { CommonModule } from '@angular/common';
import { EmplyessRecordRoutingModule } from './emplyess-record-routing.module';
import { RecordHeaderComponent } from './record-header/record-header.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    DailyRecordComponent,
    MonthlyRecordComponent,
    WeeklyRecordComponent,
    RecordHeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    EmplyessRecordRoutingModule],
   
})
export class EmplyessRecordModule {}
