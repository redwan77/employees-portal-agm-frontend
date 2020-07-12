import { LocationCordinates } from './location';

export class ExitRequest{
    IssuerId :number ;
    requestTime : Date;
    location : LocationCordinates = new LocationCordinates();

    // if set to false  it is  gonna be considered as partial exit or a break 
    golbalExit:boolean ;
}