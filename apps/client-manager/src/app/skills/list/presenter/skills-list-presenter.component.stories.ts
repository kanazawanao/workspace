import { text, number, boolean } from '@storybook/addon-knobs';
import { SkillsListPresenterComponent } from './skills-list-presenter.component';

export default {
  title: 'SkillsListPresenterComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: SkillsListPresenterComponent,
  props: {
    skills$: text('skills$', ),
    displayedColumns: text('displayedColumns', ),
  }
})