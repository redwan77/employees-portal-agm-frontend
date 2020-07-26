import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { LoginForm } from 'src/app/security/security-models/login-form';
import { AthenticationService } from 'src/app/security/athentication.service';
import { UserInformation } from 'src/app/security/security-models/userInformation';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLoagin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private authenticationService: AthenticationService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    let auth = this.authenticationService.getBasicAuthenticationCredentials();
    if (auth) {
      if (this.authenticationService.getUserRole() == 'EMPLOYEE') {
        this.router.navigate(['../user'], { relativeTo: this.activatedRoute });
      }
      else if (this.authenticationService.getUserRole() == 'ADMIN') {
        this.router.navigate(['../admin'], { relativeTo: this.activatedRoute });
      }
    }
    else {
      this.createLoginForm();
    }
  }

  createLoginForm() {
    this.formLoagin = this.fb.group({
      login: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    });
  }

  onSubmit() {
    let formValue: LoginForm = this.formLoagin.value;
    this.service.login(formValue).subscribe(
      (data: UserInformation) => {
    
        
        this.authenticationService.setBasicAuthenticationCredentials(formValue.login, formValue.password);
        this.authenticationService.setUsername(data.username + ' ' + data.lastname);

        this.authenticationService.setUserRole(data.role);
        if (this.authenticationService.getUserRole() == 'ADMIN') {
          this.router.navigate(['../user'], { relativeTo: this.activatedRoute });
        }
        // else if (this.authenticationService.getUserRole() == 'ADMIN') {
        //   this.router.navigate(['../admin'], { relativeTo: this.activatedRoute });
        // }
      },
      error => {
       // console.log('unauthenticated user');
      }
    )
  }

}
