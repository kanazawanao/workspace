import { TimelinesEntryPresenterComponent } from './timelines-entry-presenter.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiDatePickerModule, UiInputModule } from '@workspace/ui';

export default {
  title: 'TimelinesEntryPresenterComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [
      CommonModule,
      ReactiveFormsModule,
      UiInputModule,
      UiDatePickerModule,
      MatButtonModule,
      BrowserAnimationsModule,
    ],
  },
  component: TimelinesEntryPresenterComponent,
  props: {
    formGroup: new FormGroup({
      date: new FormControl(''),
      event: new FormControl(''),
    }),
  },
});
