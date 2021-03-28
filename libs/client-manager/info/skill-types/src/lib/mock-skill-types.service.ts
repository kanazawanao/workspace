import { FormBuilder, FormGroup } from '@angular/forms';
import { SkillTypeEntryModel } from './skill-types-entry.model';

export class MockSkillTypesService {
  constructor() {}
  generateFormGroup(): FormGroup {
    return new FormBuilder().group(new SkillTypeEntryModel());
  }
  navigateSkillTypesEntry() {}
}
