import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsEntryPresenterComponent } from './skills-entry-presenter.component';

describe('SkillsEntryPresenterComponent', () => {
  let component: SkillsEntryPresenterComponent;
  let fixture: ComponentFixture<SkillsEntryPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsEntryPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsEntryPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
