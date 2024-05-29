import { Component, OnInit } from '@angular/core';
import { ManagerService } from 'src/app/shared/service/manager.service';
@Component({
  selector: 'app-manager-view-request',
  templateUrl: './manager-view-request.component.html',
  styleUrls: ['./manager-view-request.component.scss'],
})
export class ManagerViewRequestComponent implements OnInit {
  constructor(public service: ManagerService) {}

  ngOnInit(): void {
    console.log('Hi I am Employee list component');
    this.service.getAllcustomerdetails();
  }
}
