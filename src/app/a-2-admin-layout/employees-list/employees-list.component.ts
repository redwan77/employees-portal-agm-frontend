import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/services/employee.service';
import { EmployeeAddDTO } from '../shared/models/employee-add-DTO';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { WorkmodeConfigurationDTO } from '../shared/models/work-modeDTO';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  public employees: EmployeeAddDTO[];
  public form: FormGroup;
  public updateTrigger = new Array<boolean>();

  constructor(
    private service: EmployeeService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
     
    

  }

  public createForm() {
    this.form = this.fb.group({
      array: this.fb.array([])
    });

    this.service.getAllEmployees().subscribe(data => {

      this.employees = data;

      this.employees.forEach(e => {
        let array = this.form.get('array') as FormArray;
        array.push(this.fb.group({
          emplId: [e.id],
          markAsRemote: [(e.isRemote != null ? e.isRemote : false)],
          markAsHoliday: [(e.isHoliday != null ? e.isHoliday : false)]
        }));
        this.updateTrigger.push(false);

      });
    });
  }

  public checkWorkModeOption(formGroupIndex: number, otherCtrlName: string) {
    (this.form.get('array') as FormArray).at(formGroupIndex).get(otherCtrlName).setValue(false);
    this.updateTrigger[formGroupIndex] = true;
  }

  public confirm(formGroupIndex) {
    let mode = new WorkmodeConfigurationDTO();
    mode.isHoliday = (this.form.get('array') as FormArray).at(formGroupIndex).get('markAsHoliday').value;
    mode.isRemote = (this.form.get('array') as FormArray).at(formGroupIndex).get('markAsRemote').value;

    
    this.service.updateEmployeeWorkMode(
      +(this.form.get('array') as FormArray).at(formGroupIndex).get('emplId').value
      , mode)
      .subscribe(data => {
        this.employees = [];
        this.updateTrigger = [];
        this.employees = data;
        
        this.form.controls.array = this.fb.array([]);

        this.employees.forEach(e => {
          let array = this.form.get('array') as FormArray;
          array.push(this.fb.group({
            emplId: [e.id],
            markAsRemote: [(e.isRemote != null ? e.isRemote : false)],
            markAsHoliday: [(e.isHoliday != null ? e.isHoliday : false)]
          }));
          this.updateTrigger.push(false);

        });
      });
  }



}
