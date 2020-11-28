import { SkillsEntryPresenterComponent } from './skills-entry-presenter.component';
import { SkillsEntryModel } from '../skills-entry.model';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiInputModule } from '@workspace/ui';

const formGroup = new FormBuilder().group(new SkillsEntryModel());
describe('SkillsEntryPresenterComponent', () => {
  let component: SkillsEntryPresenterComponent;
  let fixture: ComponentFixture<SkillsEntryPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsEntryPresenterComponent],
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
    fixture = TestBed.createComponent(SkillsEntryPresenterComponent);
    component = fixture.componentInstance;
    component.formGroup = formGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
