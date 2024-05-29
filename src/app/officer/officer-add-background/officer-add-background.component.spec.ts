import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficerAddBackgroundComponent } from './officer-add-background.component';

describe('OfficerAddBackgroundComponent', () => {
  let component: OfficerAddBackgroundComponent;
  let fixture: ComponentFixture<OfficerAddBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficerAddBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficerAddBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
