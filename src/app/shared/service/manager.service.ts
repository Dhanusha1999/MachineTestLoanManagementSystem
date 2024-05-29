import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CustomerRegistration } from '../model/customer-registration';

@Injectable({
  providedIn: 'root',
})
export class ManagerService {
  request: CustomerRegistration[] = [];
  constructor(private httpClient: HttpClient) {}
  getAllcustomerdetails(): void {
    this.httpClient
      .get(environment.apiUrl + '/api/Manager/loan-requests')
      .toPromise()
      .then((response: any) => {
        if (response && response.$values) {
          this.request = response.$values;
        } else {
          console.error('Invalid response format:' + response);
        }
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
