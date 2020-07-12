import { Time } from '@angular/common';

export class absenceRequest {

    absenceDate : Date ;
    //absenceStart: Time ;
    absenceStart : Date ;
    absenceEnd : Date ;
    reason : string ;
    description : string ;
    isSettled : boolean;
}