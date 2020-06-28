import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigurationService } from '../../shared/services/configuration.service';

@Component({
  selector: 'app-work-gealocalisation',
  templateUrl: './work-gealocalisation.component.html',
  styleUrls: ['./work-gealocalisation.component.css']
})
export class WorkGealocalisationComponent implements OnInit {

  editMode = false;

  long: number;
  lat: number;
  private form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ConfigurationService) { }

  ngOnInit() {
    this.loadGeolocalizationData();
  }

  onClickLocation($event) {
    if (this.editMode) {
      this.lat = $event.coords.lat;
      this.long = $event.coords.lng;
    }
  }

  creareForm() {
    this.form = this.formBuilder.group({
      langitude: [Validators.required],
      atitude: [Validators.required],
      distance: [3,[Validators.required , Validators.min(10)]]
    });
  }

  changeMode() {
    if(this.editMode){
      this.submitForm();
    }
    this.editMode = !this.editMode;
  }

  getCurrentLocation() {
    if(this.editMode){
      navigator.geolocation.getCurrentPosition((localisation) => {
        this.lat = localisation.coords.latitude;
        this.long = localisation.coords.longitude;
        this.form.get('atitude').setValue(this.lat);
        this.form.get('langitude').setValue(this.long);
      });
    }
  }

  loadGeolocalizationData(){
    this.service.loadGeoData().subscribe(data => {
      this.lat = data.atitude;
      this.long = data.langitude;
      this.creareForm();
      this.form.get('distance').setValue(data.distance);
      this.form.get('atitude').setValue(this.lat);
      this.form.get('langitude').setValue(this.long);
    });
  }

  submitForm() {
    this.service.patchLocalisationConfiguration(this.form.value).subscribe(
      data => {
        console.log('success');
      }
    );
  }
}
