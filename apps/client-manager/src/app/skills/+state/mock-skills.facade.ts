import { SkillsEntryModel } from '../entry/skills-entry-model';
import { EditType } from '@workspace/constants';
import { of } from 'rxjs';

export class MockSkillsFacade {
  loaded$ = of(true);
  allSkills$ = of([]);
  selectedSkills$ = of({});
  loadSkills() {}
  loadUpdateInitSkillsEntry(skillId: string) {}
  createSkill(skillEntry: SkillsEntryModel) {}
  updateSkill(id: number, skillEntry: SkillsEntryModel) {}
  setEditerMode(editerMode: EditType) {}
}
