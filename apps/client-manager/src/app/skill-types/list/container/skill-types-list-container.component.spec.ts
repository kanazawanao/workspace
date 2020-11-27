import { SkillTypesListContainerComponent } from './skill-types-list-container.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SkillTypesListContainerComponent', () => {
  let component: SkillTypesListContainerComponent;
  let fixture: ComponentFixture<SkillTypesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillTypesListContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
