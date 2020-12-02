import { SkillsEntryModel } from './skills-entry.model';
import { FormGroup } from '@angular/forms';

export class MockSkillsService {
  generateFormGroup(formData: SkillsEntryModel) {
    return new FormGroup({});
  }
}
