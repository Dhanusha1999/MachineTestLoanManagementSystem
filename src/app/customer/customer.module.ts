import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerAddFeedbackComponent } from './customer-add-feedback/customer-add-feedback.component';
import { CustomerViewStatusComponent } from './customer-view-status/customer-view-status.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomerComponent,
    CustomerAddComponent,
    CustomerAddFeedbackComponent,
    CustomerViewStatusComponent,
  ],
  imports: [CommonModule, CustomerRoutingModule, FormsModule],
})
export class CustomerModule {}
