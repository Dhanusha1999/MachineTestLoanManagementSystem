import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewStatusComponent } from './customer-view-status.component';

describe('CustomerViewStatusComponent', () => {
  let component: CustomerViewStatusComponent;
  let fixture: ComponentFixture<CustomerViewStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerViewStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerViewStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
