import { Component, OnInit } from '@angular/core';
import { OfficerService } from 'src/app/shared/service/officer.service';
@Component({
  selector: 'app-officer-view-verify',
  templateUrl: './officer-view-verify.component.html',
  styleUrls: ['./officer-view-verify.component.scss'],
})
export class OfficerViewVerifyComponent implements OnInit {
  constructor(public Service: OfficerService) {}

  ngOnInit(): void {
    this.Service.getAllPatients();
  }
}
