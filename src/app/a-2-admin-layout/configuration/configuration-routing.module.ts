import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TimingSettingsComponent } from './timing-settings/timing-settings.component';
import { WorkGealocalisationComponent } from './work-gealocalisation/work-gealocalisation.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent,
    children:[
      {
        path:'time-configuration',
        component:TimingSettingsComponent
      },
      {
        path:'geolocalisation-configuration',
        component:WorkGealocalisationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConfigurationRoutingModule { }
