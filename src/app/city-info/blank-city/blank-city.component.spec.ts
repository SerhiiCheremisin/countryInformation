import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankCityComponent } from './blank-city.component';

describe('BlankCityComponent', () => {
  let component: BlankCityComponent;
  let fixture: ComponentFixture<BlankCityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlankCityComponent]
    });
    fixture = TestBed.createComponent(BlankCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
