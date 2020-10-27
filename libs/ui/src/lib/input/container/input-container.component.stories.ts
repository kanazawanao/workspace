import { InputContainerComponent } from './input-container.component';
import { UiInputModule } from '../ui-input.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export default {
  title: 'InputContainerComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [UiInputModule, BrowserAnimationsModule],
  },
  component: InputContainerComponent,
  props: {
    label: 'label',
    value: 'value',
  },
});
