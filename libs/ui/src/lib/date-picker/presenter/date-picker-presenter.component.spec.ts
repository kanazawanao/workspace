import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerPresenterComponent } from './date-picker-presenter.component';

describe('DatePickerPresenterComponent', () => {
  let component: DatePickerPresenterComponent;
  let fixture: ComponentFixture<DatePickerPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePickerPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
