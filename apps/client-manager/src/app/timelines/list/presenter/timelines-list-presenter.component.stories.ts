import { TimelinesListPresenterComponent } from './timelines-list-presenter.component';
import { timelinesData } from '../../timelines.data';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiTableModule } from '@workspace/ui';
import { of } from 'rxjs';

export default {
  title: 'TimelinesListPresenterComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [
      CommonModule,
      ReactiveFormsModule,
      UiTableModule,
      BrowserAnimationsModule,
    ],
  },
  component: TimelinesListPresenterComponent,
  props: {
    timelines$: of(timelinesData),
    displayedColumns: ['date', 'event'],
  },
});
