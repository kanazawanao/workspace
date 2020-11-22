import { text, number, boolean } from '@storybook/addon-knobs';
import { SkillsEntryPresenterComponent } from './skills-entry-presenter.component';

export default {
  title: 'SkillsEntryPresenterComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: SkillsEntryPresenterComponent,
  props: {
    formGroup: text('formGroup', ),
  }
})