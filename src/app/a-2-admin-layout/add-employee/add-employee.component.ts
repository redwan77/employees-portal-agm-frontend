import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfigurationService } from '../shared/services/configuration.service';
import { EmployeeAddDTO } from '../shared/models/employee-add-DTO';
import { EmployeeService } from '../shared/services/employee.service';
import { SuccessMessage } from '../shared/responses/user-created-mesage';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public employeeForm: FormGroup;
  public createdSuccess= false ;
  public successMessage :SuccessMessage ;

  constructor(
    private formBuilder: FormBuilder,
    private service: EmployeeService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.employeeForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      lastName: [null, [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      phoneNumber: [null, [Validators.required, Validators.pattern('[0-9]+')]],
      email: [null, [Validators.required, Validators.email]],
      adress: [null, [Validators.required]],
      isRemote: [false, []]
    });
  }

  submitForm() {
    console.log(this.employeeForm.value);
    
    this.service.addEmployee(this.employeeForm.value).subscribe(data => {
      this.createdSuccess =true;
      this.employeeForm.reset();
      this.successMessage = data ;
    });
  }
}
