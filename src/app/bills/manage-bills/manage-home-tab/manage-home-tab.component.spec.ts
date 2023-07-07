import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHomeTabComponent } from './manage-home-tab.component';

describe('ManageHomeTabComponent', () => {
  let component: ManageHomeTabComponent;
  let fixture: ComponentFixture<ManageHomeTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageHomeTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageHomeTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
