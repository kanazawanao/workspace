import { SkillsEntryModel } from './entry/skills-entry.model';
import { skillsData } from './skills.data';
import { FormGroup } from '@angular/forms';
import { ISkill } from '@workspace/api-interfaces';
import { Observable, of } from 'rxjs';

export class MockSkillsService {
  generateFormGroup(formData: SkillsEntryModel) {
    return new FormGroup({});
  }

  fetchSkills(): Observable<ISkill[]> {
    return of(skillsData);
  }

  fetchSkill(id: string): Observable<ISkill> {
    return of(skillsData[1]);
  }

  postSkill(skill: SkillsEntryModel): Observable<ISkill> {
    return of(skillsData[1]);
  }

  updateSkill(id: number, skill: SkillsEntryModel): Observable<ISkill> {
    return of(skillsData[1]);
  }
}
