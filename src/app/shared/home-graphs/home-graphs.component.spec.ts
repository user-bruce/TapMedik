import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGraphsComponent } from './home-graphs.component';

describe('HomeGraphsComponent', () => {
  let component: HomeGraphsComponent;
  let fixture: ComponentFixture<HomeGraphsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeGraphsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeGraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
