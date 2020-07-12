import { Observable } from 'rxjs';
import { LocationCordinates } from './location';

export class EntranceRequest{
    IssuerId :number ;
    requestTime : Date;
    location : LocationCordinates = new LocationCordinates();
}