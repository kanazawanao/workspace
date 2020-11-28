import { UsersEntryPresenterComponent } from './users-entry-presenter.component';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { EditType } from '@workspace/constants';
import { UiDatePickerModule, UiInputModule } from '@workspace/ui';

export default {
  title: 'UsersEntryPresenterComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [
      CommonModule,
      ReactiveFormsModule,
      UiInputModule,
      UiDatePickerModule,
      MatButtonModule,
    ],
  },
  component: UsersEntryPresenterComponent,
  props: {
    formGroup: new FormGroup({}),
    editMode: EditType.create,
  },
});
