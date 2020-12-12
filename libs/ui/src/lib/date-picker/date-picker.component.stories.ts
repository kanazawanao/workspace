import { DatePickerComponent } from './date-picker.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'DatePickerComponent',
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
  component: DatePickerComponent,
  props: {
    dateFormControl: new FormControl(),
    label: '日付',
  },
});
