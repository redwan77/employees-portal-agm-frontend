import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConfigurationRoutingModule } from "./configuration-routing.module";
import { MainComponent } from "./main/main.component";
import { AgmCoreModule } from "@agm/core";
import { WorkModeComponent } from './work-mode/work-mode.component';
import { WorkGealocalisationComponent } from './work-gealocalisation/work-gealocalisation.component';
import { TimingSettingsComponent } from './timing-settings/timing-settings.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainComponent, WorkModeComponent, WorkGealocalisationComponent, TimingSettingsComponent],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAInlViaMv-tIPY3jJso1I4pvfzpAe01V0'
    }),
    ReactiveFormsModule,
    FormsModule
  ],
})
export class ConfigurationModule { }
