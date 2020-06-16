import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConfigurationRoutingModule } from "./configuration-routing.module";
import { MainComponent } from "./main/main.component";

import { AgmCoreModule } from "@agm/core";

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    ConfigurationRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAInlViaMv-tIPY3jJso1I4pvfzpAe01V0'
    })
  ],
})
export class ConfigurationModule {}
