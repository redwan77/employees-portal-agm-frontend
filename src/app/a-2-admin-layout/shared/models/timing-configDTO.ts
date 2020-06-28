import { Time } from '@angular/common';

export class TimingConfigurationDTO{
    
    startTime:Time;
    endTime:Time;
    margin:number ;
    isMarginActivated:boolean ;
    theoricalDailyWorkedTime: number ;
    theoricalMonthlyWorkedTime:number ;
    theoricalWeeklyWorkedTime:number ;
}