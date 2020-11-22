import { SkillsEntryModel } from './entry/skills-entry-model';
import { FormGroup } from '@angular/forms';
import { ISkill } from '@workspace/api-interfaces';
import { Observable, of } from 'rxjs';

export class MockSkillsService {
  generateFormGroup(formData: SkillsEntryModel) {
    return new FormGroup({});
  }

  fetchSkills(): Observable<ISkill[]> {
    return of([]);
  }

  fetchSkill(id: string): Observable<ISkill> {
    return of();
  }

  postSkill(skill: SkillsEntryModel): Observable<ISkill> {
    return of();
  }

  updateSkill(id: number, skill: SkillsEntryModel): Observable<ISkill> {
    return of();
  }
}
