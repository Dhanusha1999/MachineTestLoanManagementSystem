import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficerRoutingModule } from './officer-routing.module';
import { OfficerComponent } from './officer.component';
import { OfficerViewVerifyComponent } from './officer-view-verify/officer-view-verify.component';
import { OfficerAddBackgroundComponent } from './officer-add-background/officer-add-background.component';


@NgModule({
  declarations: [OfficerComponent, OfficerViewVerifyComponent, OfficerAddBackgroundComponent],
  imports: [
    CommonModule,
    OfficerRoutingModule
  ]
})
export class OfficerModule { }
