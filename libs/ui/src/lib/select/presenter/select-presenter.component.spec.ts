import { SelectPresenterInputData } from './select-presenter-input-data';
import { SelectPresenterComponent } from './select-presenter.component';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const inputData: SelectPresenterInputData = {
  label: 'test',
  isDisabled: false,
  options$: [
    {
      value: 'select1',
      viewValue: 'select1',
    },
    {
      value: 'select2',
      viewValue: 'select2',
    },
    {
      value: 'select3',
      viewValue: 'select3',
    },
  ],
  formControl: new FormControl(),
};

describe('SelectPresenterComponent', () => {
  let component: SelectPresenterComponent;
  let fixture: ComponentFixture<SelectPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectPresenterComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPresenterComponent);
    component = fixture.componentInstance;
    component.inputData = inputData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
