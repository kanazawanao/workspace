import { InputPresenterInputData } from './input-presenter-input-data';
import { InputPresenterComponent } from './input-presenter.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const presenterInputData: InputPresenterInputData = {
  value: 'value',
  label: 'label',
};

export default {
  title: 'InputPresenterComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [
      CommonModule,
      MatButtonModule,
      MatInputModule,
      MatIconModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      FormsModule,
      BrowserAnimationsModule,
    ],
  },
  component: InputPresenterComponent,
  props: {
    inputData: presenterInputData,
  },
});
