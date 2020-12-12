import { InputComponent } from './input.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'InputComponent',
};
const modules = [
  CommonModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  FormsModule,
  BrowserAnimationsModule,
]
export const primary = () => ({
  moduleMetadata: {
    imports: [
      modules
    ],
  },
  component: InputComponent,
  props: {
    inpFormControl: new FormControl(),
    label: 'text',
    type: 'text',
  },
});
export const password = () => ({
  moduleMetadata: {
    imports: [
      modules
    ],
  },
  component: InputComponent,
  props: {
    inpFormControl: new FormControl(),
    label: 'password',
    type: 'password',
  },
});
