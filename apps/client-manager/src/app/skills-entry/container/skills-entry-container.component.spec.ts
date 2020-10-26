import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsEntryContainerComponent } from './skills-entry-container.component';

describe('SkillsEntryContainerComponent', () => {
  let component: SkillsEntryContainerComponent;
  let fixture: ComponentFixture<SkillsEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsEntryContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsEntryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
