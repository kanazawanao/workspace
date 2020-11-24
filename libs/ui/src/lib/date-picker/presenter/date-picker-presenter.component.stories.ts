import { DatePickerPresenterComponent } from './date-picker-presenter.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'DatePickerPresenterComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatInputModule,
      MatDatepickerModule,
      MatMomentDateModule,
      BrowserAnimationsModule,
    ],
  },
  component: DatePickerPresenterComponent,
  props: {
    inputData: {
      formControl: new FormControl(),
    },
  },
});
