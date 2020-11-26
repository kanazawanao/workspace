import { LoginPresenterComponent } from './login-presenter.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiInputModule } from '@workspace/ui';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

const formBuilder = new FormBuilder();
export default {
  title: 'LoginPresenterComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [
      CommonModule,
      ReactiveFormsModule,
      UiInputModule,
      MatButtonModule,
      BrowserAnimationsModule,
    ],
  },
  component: LoginPresenterComponent,
  props: {
    formGroup: formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    }),
  },
});
