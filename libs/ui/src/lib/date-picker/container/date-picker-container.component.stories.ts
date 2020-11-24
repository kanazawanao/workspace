import { DatePickerContainerComponent } from './date-picker-container.component';
import { UiDatePickerModule } from '../ui-date-picker.module';
import { FormControl } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'DatePickerContainerComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [UiDatePickerModule, BrowserAnimationsModule],
  },
  component: DatePickerContainerComponent,
  props: {
    formControl: new FormControl(),
  },
});
