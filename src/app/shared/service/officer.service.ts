import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VerificationInfo } from '../model/verification-info';
import { BackgroundInfo } from '../model/background-info';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class OfficerService {
  verification: VerificationInfo[] = [];
  constructor(private httpClient: HttpClient) {}
  getAllPatients(): void {
    this.httpClient
      .get(environment.apiUrl + '/api/FieldOfficers/verifyinfo')
      .toPromise()
      .then((response: any) => {
        if (response && response.length > 0) {
          this.verification = response;
          console.log('patient', this.verification);
        } else {
          console.error('Invalid response format:');
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  //Insert Patient
  insertBackgroundInfo(backgroundInformation: BackgroundInfo): Observable<any> {
    console.log(backgroundInformation);
    return this.httpClient.post(
      environment.apiUrl + '/api/FieldOfficers/background',
      backgroundInformation
    );
  }
}
