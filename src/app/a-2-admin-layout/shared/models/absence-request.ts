import { UserInformation } from 'src/app/security/security-models/userInformation';

export class AbsenceRequest {

    absenceDate : Date ;
    //absenceStart: Time ;
    absenceStart : Date ;
    absenceEnd : Date ;
    reason : string ;
    description : string ;
    isSettled : boolean;
    accepted: boolean
    user : any;
    verified : boolean;
}