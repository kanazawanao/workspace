import { LoginPresenterComponent } from './login-presenter.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiInputModule } from '@workspace/ui';

export default {
  title: 'LoginPresenterComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      CommonModule,
      ReactiveFormsModule,
      UiInputModule,
      MatButtonModule, 
      BrowserAnimationsModule,
    ]
  },
  component: LoginPresenterComponent,
  props: {
    formGroup: new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    }),
  }
})