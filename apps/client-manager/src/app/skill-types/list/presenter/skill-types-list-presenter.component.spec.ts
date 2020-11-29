import { SkillTypesListPresenterComponent } from './skill-types-list-presenter.component';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UiTableModule } from '@workspace/ui';

describe('SkillTypesListPresenterComponent', () => {
  let component: SkillTypesListPresenterComponent;
  let fixture: ComponentFixture<SkillTypesListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillTypesListPresenterComponent],
      imports: [CommonModule, ReactiveFormsModule, UiTableModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypesListPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
