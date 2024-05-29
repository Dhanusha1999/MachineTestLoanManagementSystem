import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerViewFeedbackComponent } from './manager-view-feedback.component';

describe('ManagerViewFeedbackComponent', () => {
  let component: ManagerViewFeedbackComponent;
  let fixture: ComponentFixture<ManagerViewFeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerViewFeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerViewFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
