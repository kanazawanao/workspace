import { SkillsEntryPresenterComponent } from './skills-entry-presenter.component';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiInputModule } from '@workspace/ui';

export default {
  title: 'SkillsEntryPresenterComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: [
      CommonModule,
      ReactiveFormsModule,
      UiInputModule,
      MatButtonModule,
      BrowserAnimationsModule,
    ]
  },
  component: SkillsEntryPresenterComponent,
  props: {
    formGroup: new FormGroup({
      skillType: new FormControl(''),
      skillName: new FormControl(''),
      experienceYears: new FormControl(''),
      skillLevel: new FormControl(''),
    }),
  }
})