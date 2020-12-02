import { FormGroup } from '@angular/forms';
import { SkillsEntryModel } from '@workspace/client-manager/models';

export class MockSkillsService {
  generateFormGroup(formData: SkillsEntryModel) {
    return new FormGroup({});
  }
}
