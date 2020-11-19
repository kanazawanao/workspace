import { DatePickerPresenterInputData } from './date-picker-presenter-input-data';
import { DatePickerPresenterComponent } from './date-picker-presenter.component';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const presenterInputData: DatePickerPresenterInputData = {
  formControl: new FormControl(''),
};
describe('DatePickerPresenterComponent', () => {
  let component: DatePickerPresenterComponent;
  let fixture: ComponentFixture<DatePickerPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatePickerPresenterComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatMomentDateModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerPresenterComponent);
    component = fixture.componentInstance;
    component.inputData = presenterInputData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
