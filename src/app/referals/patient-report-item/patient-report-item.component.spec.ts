import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientReportItemComponent } from './patient-report-item.component';

describe('PatientReportItemComponent', () => {
  let component: PatientReportItemComponent;
  let fixture: ComponentFixture<PatientReportItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientReportItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientReportItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
