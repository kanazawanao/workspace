import { TimelinesListPresenterComponent } from './timelines-list-presenter.component';
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
    timelines$: of([]),
    displayedColumns: ['date', 'event'],
  },
});
