import { text, number, boolean } from '@storybook/addon-knobs';
import { LoginPresenterComponent } from './login-presenter.component';

export default {
  title: 'LoginPresenterComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: LoginPresenterComponent,
  props: {
    formGroup: text('formGroup', ),
  }
})