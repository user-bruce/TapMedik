import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomReportsComponent } from './room-reports.component';

describe('RoomReportsComponent', () => {
  let component: RoomReportsComponent;
  let fixture: ComponentFixture<RoomReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
