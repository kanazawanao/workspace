import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTypesEntryContainerComponent } from './skill-types-entry-container.component';

describe('SkillTypesEntryContainerComponent', () => {
  let component: SkillTypesEntryContainerComponent;
  let fixture: ComponentFixture<SkillTypesEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillTypesEntryContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypesEntryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
