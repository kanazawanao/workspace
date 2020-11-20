import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsListPresenterComponent } from './skills-list-presenter.component';

describe('SkillsListPresenterComponent', () => {
  let component: SkillsListPresenterComponent;
  let fixture: ComponentFixture<SkillsListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsListPresenterComponent ]
    })
    .compileComponents();
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
