import { SkillInfoContainerComponent } from './skill-info-container.component';
import { SkillsService } from '../skills.service';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillsFacade } from '../+state/skills.facade';

@Component({
  selector: 'workspace-skill-info-presenter',
  template: '',
  styleUrls: [],
})
class MockSkillInfoPresenterComponent {}

class MockSkillsService {}

describe('SkillInfoContainerComponent', () => {
  let component: SkillInfoContainerComponent;
  let fixture: ComponentFixture<SkillInfoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillInfoContainerComponent,
        MockSkillInfoPresenterComponent,
      ],
    }).compileComponents();
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
