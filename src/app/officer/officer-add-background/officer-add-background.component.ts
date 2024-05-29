import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OfficerService } from 'src/app/shared/service/officer.service';

@Component({
  selector: 'app-officer-add-background',
  templateUrl: './officer-add-background.component.html',
  styleUrls: ['./officer-add-background.component.scss'],
})
export class OfficerAddBackgroundComponent implements OnInit {
  constructor( public Service: OfficerService) {}

  ngOnInit(): void {}
  onSubmit(form: NgForm) {
    this.addInfo(form);
  }

  addInfo(form?: NgForm) {
    console.log('Form value before setting in service:', form.value);
    this.Service.insertBackgroundInfo(form.value).subscribe(
      (response) => {
        console.log('hello from add ', response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
