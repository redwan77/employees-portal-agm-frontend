import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigurationService } from '../../shared/services/configuration.service';

@Component({
  selector: 'app-timing-settings',
  templateUrl: './timing-settings.component.html',
  styleUrls: ['./timing-settings.component.css']
})
export class TimingSettingsComponent implements OnInit {

  public timingForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ConfigurationService) { }

  ngOnInit() {
    this.createForm();
    this.loadTimingData();
  }

  createForm() {
    this.timingForm = this.formBuilder.group({
      startTime: [null, [Validators.required]],
      endTime: [null, [Validators.required]],
      margin: [null, [Validators.required]],
      isMarginActivated: [false, [Validators.required]],
      theoricalDailyWorkedTime: [null, [Validators.required]],
      theoricalMonthlyWorkedTime: [null, [Validators.required]],
      theoricalWeeklyWorkedTime: [null, [Validators.required]],
    });
  }

  submitForm() {
    this.service.patchTimingConfiguration(this.timingForm.value).subscribe(data => {
      console.log('success');
    });
  }

  loadTimingData() {
    this.service.loadTimingoData().subscribe(data => {
      this.timingForm.get('startTime').setValue(data.startTime);
      this.timingForm.get('endTime').setValue(data.endTime);
      this.timingForm.get('margin').setValue(data.margin);
      this.timingForm.get('isMarginActivated').setValue(data.isMarginActivated);
      this.timingForm.get('theoricalDailyWorkedTime').setValue(data.theoricalDailyWorkedTime);
      this.timingForm.get('theoricalMonthlyWorkedTime').setValue(data.theoricalMonthlyWorkedTime);
      this.timingForm.get('theoricalWeeklyWorkedTime').setValue(data.theoricalWeeklyWorkedTime);
    });
  }

}
