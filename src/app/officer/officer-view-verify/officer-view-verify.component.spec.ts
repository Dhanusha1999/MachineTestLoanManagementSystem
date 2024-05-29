import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerViewVerifyComponent } from './officer-view-verify.component';

describe('OfficerViewVerifyComponent', () => {
  let component: OfficerViewVerifyComponent;
  let fixture: ComponentFixture<OfficerViewVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerViewVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerViewVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
