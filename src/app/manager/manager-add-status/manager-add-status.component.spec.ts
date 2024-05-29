import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddStatusComponent } from './manager-add-status.component';

describe('ManagerAddStatusComponent', () => {
  let component: ManagerAddStatusComponent;
  let fixture: ComponentFixture<ManagerAddStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAddStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
