import { TimelinesEntryModel } from './timelines-entry.model';
import { FormGroup } from '@angular/forms';

export class MockTimelinesService {
  generateFormGroup(formData: TimelinesEntryModel): FormGroup {
    return null;
  }

  navigateSkillTypesEntry(id: number): void {}
}
