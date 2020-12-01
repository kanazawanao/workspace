import { FormGroup } from '@angular/forms';
import { TimelinesEntryModel } from '@workspace/client-manager/models';

export class MockTimelinesService {
  generateFormGroup(formData: TimelinesEntryModel): FormGroup {
    return null;
  }
}
