import { SkillTypesListPresenterComponent } from './skill-types-list-presenter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SkillTypesListPresenterComponent', () => {
  let component: SkillTypesListPresenterComponent;
  let fixture: ComponentFixture<SkillTypesListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillTypesListPresenterComponent],
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
