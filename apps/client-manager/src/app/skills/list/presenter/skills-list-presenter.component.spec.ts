import { SkillsListPresenterComponent } from './skills-list-presenter.component';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UiTableModule } from '@workspace/ui';


describe('SkillsListPresenterComponent', () => {
  let component: SkillsListPresenterComponent;
  let fixture: ComponentFixture<SkillsListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsListPresenterComponent],
      imports: [CommonModule, ReactiveFormsModule, UiTableModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsListPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
