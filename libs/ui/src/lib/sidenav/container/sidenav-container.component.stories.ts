import { SidenavContainerComponent } from './sidenav-container.component';
import { SidenavOption } from '../sidenav-option';
import { UiSidenavModule } from '../ui-sidenav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

const options: SidenavOption[] = [
  { value: '', viewValue: 'A' },
  { value: '', viewValue: 'B' },
  { value: '', viewValue: 'C' },
];
export default {
  title: 'SidenavContainerComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [UiSidenavModule, BrowserAnimationsModule, RouterTestingModule],
  },
  component: SidenavContainerComponent,
  props: {
    headerTitle: 'StoryBookTitle',
    menuTitle: 'StoryBoolMenu',
    options: options,
  },
});
