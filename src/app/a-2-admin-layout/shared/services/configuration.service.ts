import { Injectable } from '@angular/core';
import { API_KEY_CONFIG } from '../configuration-data/api-keys';
import { Observable } from 'rxjs';
import { TimingConfigurationDTO } from '../models/work-modeDTO';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

 

  constructor(private http :HttpClient) { }

  public patchTimingConfiguration() :Observable<TimingConfigurationDTO>{
    return null;
  }

  public patchLocalisationConfiguration():Observable<TimingConfigurationDTO>{
    return null;
  }

  public patchWorkModeConfiguration():Observable<TimingConfigurationDTO>{

    return null;
  }
}
