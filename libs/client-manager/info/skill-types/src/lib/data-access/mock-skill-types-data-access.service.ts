import { ISkillType } from '@workspace/api-interfaces';
import { Observable, of } from 'rxjs';
import { skillTypesData } from './skill-types.data';

export class MockSkillTypesDataAccessService {
  constructor() {}
  fetchSkillTypes(): Observable<ISkillType[]> {
    return of(skillTypesData);
  }
  fetchSkillType(): Observable<ISkillType> {
    return of(skillTypesData[0]);
  }
  postSkillType(): Observable<ISkillType> {
    return of(skillTypesData[1]);
  }
  updateSkillType(): Observable<ISkillType> {
    return of(skillTypesData[1]);
  }
  deleteSkillType() {}
}
