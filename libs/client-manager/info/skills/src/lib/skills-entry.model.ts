import { ISkill } from '@workspace/api-interfaces';

export class SkillsEntryModel implements ISkill {
  experienceYears: number = 0;
  skillLevel: number = 0;
  skillName: string = '';
  skillType: number = 0;
}
