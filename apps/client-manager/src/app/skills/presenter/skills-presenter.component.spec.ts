import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsPresenterComponent } from './skills-presenter.component';

describe('SkillsPresenterComponent', () => {
  let component: SkillsPresenterComponent;
  let fixture: ComponentFixture<SkillsPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
