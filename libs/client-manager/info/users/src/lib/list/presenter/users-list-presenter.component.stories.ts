import { UsersListPresenterComponent } from './users-list-presenter.component';
import { usersData } from '../../users.data';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiTableModule } from '@workspace/ui';
import { of } from 'rxjs';

export default {
  title: 'UsersListPresenterComponent',
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
  component: UsersListPresenterComponent,
  props: {
    users$: of(usersData),
    displayedColumns: ['id', 'firstName', 'lastName', 'email', 'birthDay'],
  },
});
