import { skillsData } from '../skills.data';
import { SkillsEntryModel } from '@workspace/client-manager/models';
import { EditType } from '@workspace/constants';
import { of } from 'rxjs';

export class MockSkillsFacade {
  allSkills$ = of(skillsData[1]);
  workSkill$ = of(skillsData);
  editMode$ = of(EditType.create);
  loadSkills() {}
  loadUpdateInitSkillsEntry(skillId: string) {}
  createSkill(skillEntry: SkillsEntryModel) {}
  updateSkill(id: number, skillEntry: SkillsEntryModel) {}
  setEditerMode(editerMode: EditType) {}
}
