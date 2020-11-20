import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsListContainerComponent } from './skills-list-container.component';

describe('SkillsListContainerComponent', () => {
  let component: SkillsListContainerComponent;
  let fixture: ComponentFixture<SkillsListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
