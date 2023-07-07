import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralReportsComponent } from './referral-reports.component';

describe('ReferralReportsComponent', () => {
  let component: ReferralReportsComponent;
  let fixture: ComponentFixture<ReferralReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReferralReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReferralReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
