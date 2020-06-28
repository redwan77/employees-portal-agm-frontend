import { Injectable } from '@angular/core';
import { API_KEY_CONFIG } from '../configuration-data/api-keys';
import { Observable } from 'rxjs';
import { WorkmodeConfigurationDTO } from '../models/work-modeDTO';
import { HttpClient } from '@angular/common/http';
import { LocalizationConfigurationDTO } from '../models/localization-configDTO';
import { TimingConfigurationDTO } from '../models/timing-configDTO';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {



  constructor(private http: HttpClient) { }

  public loadGeoData(): Observable<LocalizationConfigurationDTO> {
    return this.http.get<LocalizationConfigurationDTO>(API_KEY_CONFIG + '/geoLocalizationData')
  }

  public loadTimingoData(): Observable<TimingConfigurationDTO> {
    return this.http.get<TimingConfigurationDTO>(API_KEY_CONFIG + '/timingData')
  }

  public loadWokroData(): Observable<WorkmodeConfigurationDTO> {
    return this.http.get<WorkmodeConfigurationDTO>(API_KEY_CONFIG + '/workData')
  }

  // patch values from form 

  public patchTimingConfiguration(body: TimingConfigurationDTO): Observable<TimingConfigurationDTO> {
    return this.http.patch<TimingConfigurationDTO>(API_KEY_CONFIG + '/timing-configuration', body);
  }

  public patchLocalisationConfiguration(body: LocalizationConfigurationDTO): Observable<LocalizationConfigurationDTO> {
    return this.http.patch<LocalizationConfigurationDTO>(API_KEY_CONFIG + '/localisation-configuration', body);
  }

  public patchWorkModeConfiguration(body: WorkmodeConfigurationDTO): Observable<WorkmodeConfigurationDTO> {
    return this.http.patch<WorkmodeConfigurationDTO>(API_KEY_CONFIG + '/workMode-configuration', body);
  }


}
