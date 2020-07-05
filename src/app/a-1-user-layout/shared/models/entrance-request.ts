import { Observable } from 'rxjs';
import { LocationCordinates } from './location';

export class EntranceRequest{
    IssuerId =4 ;
    requestTime : Date;
    location : LocationCordinates = new LocationCordinates();
}