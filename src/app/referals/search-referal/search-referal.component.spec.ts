import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReferalComponent } from './search-referal.component';

describe('SearchReferalComponent', () => {
  let component: SearchReferalComponent;
  let fixture: ComponentFixture<SearchReferalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchReferalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchReferalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
