import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillInfoContainerComponent } from './skill-info-container.component';

describe('SkillInfoContainerComponent', () => {
  let component: SkillInfoContainerComponent;
  let fixture: ComponentFixture<SkillInfoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillInfoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
