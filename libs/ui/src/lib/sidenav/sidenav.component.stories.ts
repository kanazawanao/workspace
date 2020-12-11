import { SidenavComponent } from './sidenav.component';
import { UiSidenavModule } from './ui-sidenav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'SidenavComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [BrowserAnimationsModule, RouterTestingModule, UiSidenavModule],
  },
  component: SidenavComponent,
  props: {
    headerTitle: 'StoryBookTitle',
    menuTitle: 'StoryBoolMenu',
    options: [
      { value: '', viewValue: 'A' },
      { value: '', viewValue: 'B' },
      { value: '', viewValue: 'C' },
    ],
  },
});
