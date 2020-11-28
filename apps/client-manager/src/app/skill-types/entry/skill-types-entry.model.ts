import { ISkillType } from '@workspace/api-interfaces';

export class SkillTypeEntryModel implements ISkillType {
  skillType: number = 0;
  skillTypeName: string = '';
}
