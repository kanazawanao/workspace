import { DatePickerContainerComponent } from './date-picker-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'DatePickerContainerComponent',
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
  component: DatePickerContainerComponent,
  props: {},
});
