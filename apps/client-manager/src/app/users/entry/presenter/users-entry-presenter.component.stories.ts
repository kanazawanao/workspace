import { text, number, boolean } from '@storybook/addon-knobs';
import { UsersEntryPresenterComponent } from './users-entry-presenter.component';

export default {
  title: 'UsersEntryPresenterComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: UsersEntryPresenterComponent,
  props: {
    formGroup: text('formGroup', ),
    editMode: text('editMode', ),
  }
})