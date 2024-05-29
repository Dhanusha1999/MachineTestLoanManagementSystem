import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddVerifyComponent } from './manager-add-verify.component';

describe('ManagerAddVerifyComponent', () => {
  let component: ManagerAddVerifyComponent;
  let fixture: ComponentFixture<ManagerAddVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerAddVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
