import { ISkill } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

export class SkillInfoPresenterInputData {
  displayedColumn: string[];
  dataSource$: Observable<ISkill[]>;
}
