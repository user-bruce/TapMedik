import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRoomsTabComponent } from './manage-rooms-tab.component';

describe('ManageRoomsTabComponent', () => {
  let component: ManageRoomsTabComponent;
  let fixture: ComponentFixture<ManageRoomsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageRoomsTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageRoomsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
