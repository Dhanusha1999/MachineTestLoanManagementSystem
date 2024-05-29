import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/shared/service/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss'],
})
export class CustomerAddComponent implements OnInit {
  showModal: boolean = false; // Declare the showModal property
  constructor(public customerService: CustomerService) {}

  ngOnInit(): void {}
  addCustomer(form?: NgForm) {
    if (form) {
      console.log('Form value before setting in service:', form.value);
      this.customerService.insertCustomer(form.value).subscribe(
        (response) => {
          console.log('hello from add ', response);
          this.customerService.customerDetails = response;
          alert('Loan request sent successfully');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
  onSubmit(form: NgForm) {
    this.addCustomer(form);
  }
}
