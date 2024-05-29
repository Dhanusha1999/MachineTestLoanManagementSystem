import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerComponent } from './manager.component';
import { ManagerViewRequestComponent } from './manager-view-request/manager-view-request.component';
import { ManagerAddVerifyComponent } from './manager-add-verify/manager-add-verify.component';
import { ManagerViewFeedbackComponent } from './manager-view-feedback/manager-view-feedback.component';
import { ManagerAddStatusComponent } from './manager-add-status/manager-add-status.component';


@NgModule({
  declarations: [ManagerComponent, ManagerViewRequestComponent, ManagerAddVerifyComponent, ManagerViewFeedbackComponent, ManagerAddStatusComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
