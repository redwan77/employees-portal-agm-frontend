import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ConfigurationService } from '../../shared/services/configuration.service';

@Component({
  selector: 'app-work-mode',
  templateUrl: './work-mode.component.html',
  styleUrls: ['./work-mode.component.css']
})
export class WorkModeComponent implements OnInit {

  public form: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private service: ConfigurationService
  ) { }

  ngOnInit() {
    this.loadWorkData();
  }

  createForm() {
    this.form = this.formBuilder.group({
      isRemote: [false,[]],
      isHoliday: [false,[]]
    });
  }

  loadWorkData() {
    this.service.loadWokroData().subscribe(data => {
      this.createForm();
      this.form.get('isHoliday').setValue(data.isHoliday);
      this.form.get('isRemote').setValue(data.isRemote);
    });
  }

  submit() {
    console.log(this.form.value);
    this.service.patchWorkModeConfiguration(this.form.value).subscribe(data => {
      console.log('success');
    });
  }

}
