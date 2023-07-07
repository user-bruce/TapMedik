import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppointmentsTabComponent } from './manage-appointments-tab.component';

describe('ManageAppointmentsTabComponent', () => {
  let component: ManageAppointmentsTabComponent;
  let fixture: ComponentFixture<ManageAppointmentsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAppointmentsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAppointmentsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
