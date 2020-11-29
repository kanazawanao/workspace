import { skillTypesData } from '../skill-types.data';
import { EditType } from '@workspace/constants';
import { of } from 'rxjs';

export class MockSkillTypesFacade {
  allSkillTypes$ = of(skillTypesData[1]);
  workSkillType$ = of(skillTypesData);
  editMode$ = of(EditType.create);
  loadSkillTypes() {}
  loadUpdateInitSkillTypeEntry(skillTypeId: string) {}
  setEditerMode(editerMode: EditType) {}
}
