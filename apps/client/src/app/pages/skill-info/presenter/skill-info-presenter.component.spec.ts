import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillInfoPresenterComponent } from './skill-info-presenter.component';

describe('SkillInfoPresenterComponent', () => {
  let component: SkillInfoPresenterComponent;
  let fixture: ComponentFixture<SkillInfoPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillInfoPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillInfoPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
