import { SelectPresenterInputData } from './select-presenter-input-data';
import { SelectPresenterComponent } from './select-presenter.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const inputData: SelectPresenterInputData = {
  label: 'test',
  isDisabled: false,
  options: [
    {
      value: 'select1',
      viewValue: 'select1',
    },
    {
      value: 'select2',
      viewValue: 'select2',
    },
    {
      value: 'select3',
      viewValue: 'select3',
    },
  ],
};
export default {
  title: 'SelectPresenterComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [
      CommonModule,
      MatSelectModule,
      MatFormFieldModule,
      BrowserAnimationsModule,
    ],
  },
  component: SelectPresenterComponent,
  props: {
    inputData: inputData,
  },
});
