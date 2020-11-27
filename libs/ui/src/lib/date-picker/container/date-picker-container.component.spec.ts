import { DatePickerContainerComponent } from './date-picker-container.component';
import { DatePickerPresenterInputData } from '../presenter/date-picker-presenter-input-data';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

/** プレゼンタコンポーネントのモック */
@Component({
  selector: 'ui-date-picker-presenter',
  template: '',
  styleUrls: [],
})
export class MockDatePickerPresenterComponent {
  @Input() inputData: DatePickerPresenterInputData;
  @Input() label: string;
}

describe('DatePickerContainerComponent', () => {
  let component: DatePickerContainerComponent;
  let fixture: ComponentFixture<DatePickerContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        DatePickerContainerComponent,
        MockDatePickerPresenterComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
