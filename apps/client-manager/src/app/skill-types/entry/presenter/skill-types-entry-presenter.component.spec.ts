import { SkillTypesEntryPresenterComponent } from './skill-types-entry-presenter.component';
import { SkillTypeEntryModel } from '../skill-types-entry.model';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiInputModule } from '@workspace/ui';

const formGroup = new FormBuilder().group(new SkillTypeEntryModel());
describe('SkillTypesEntryPresenterComponent', () => {
  let component: SkillTypesEntryPresenterComponent;
  let fixture: ComponentFixture<SkillTypesEntryPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillTypesEntryPresenterComponent],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        UiInputModule,
        MatButtonModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypesEntryPresenterComponent);
    component = fixture.componentInstance;
    component.formGroup = formGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
