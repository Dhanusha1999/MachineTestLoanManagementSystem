import { Injectable } from '@angular/core';
import { CustomerRegistration } from '../model/customer-registration';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  showModal: boolean = false;
  customer: CustomerRegistration[] = [];
  customerDetails: CustomerRegistration;
  formpatData: CustomerRegistration = new CustomerRegistration();
  constructor(private httpClient: HttpClient) {}
  //Insert customer
  insertCustomer(customer: CustomerRegistration): Observable<any> {
    console.log(customer);
    return this.httpClient.post(
      environment.apiUrl + '/api/Customers',
      customer
    );
  }
}
