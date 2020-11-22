import { text, number, boolean } from '@storybook/addon-knobs';
import { UsersListPresenterComponent } from './users-list-presenter.component';

export default {
  title: 'UsersListPresenterComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: UsersListPresenterComponent,
  props: {
    users$: text('users$', ),
    displayedColumns: text('displayedColumns', ),
  }
})