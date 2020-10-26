import { InputContainerComponent } from './input-container.component';
import { UiInputModule } from '../ui-input.module';

export default {
  title: 'InputContainerComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [UiInputModule],
  },
  component: InputContainerComponent,
  props: {
    label: 'label',
    value: 'value',
  },
});
