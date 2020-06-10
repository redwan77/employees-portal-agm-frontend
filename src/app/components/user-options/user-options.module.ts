import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserOptionsRoutingModule } from './user-options-routing.module';
import { UserOptionsComponent } from './user-options.component';
import { AbsenceVerificationComponent } from './absence-verification/absence-verification.component';
import { AbsenseRequestComponent } from './absense-request/absense-request.component';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';

@NgModule({
  declarations: [AbsenceVerificationComponent, AbsenseRequestComponent],
  imports: [
    CommonModule,
    UserOptionsRoutingModule,
    SharedModuleModule
  ],
  bootstrap:[UserOptionsComponent]
})
export class UserOptionsModule { }
