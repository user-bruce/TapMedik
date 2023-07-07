import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdmissionsTabComponent } from './manage-admissions-tab.component';

describe('ManageAdmissionsTabComponent', () => {
  let component: ManageAdmissionsTabComponent;
  let fixture: ComponentFixture<ManageAdmissionsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageAdmissionsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageAdmissionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
