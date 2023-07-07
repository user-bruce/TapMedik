import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageReferalsTabComponent } from './manage-referals-tab.component';

describe('ManageReferalsTabComponent', () => {
  let component: ManageReferalsTabComponent;
  let fixture: ComponentFixture<ManageReferalsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageReferalsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageReferalsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
