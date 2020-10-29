import { SkillInfoContainerComponent } from './skill-info-container.component';
import { SkillsService } from '../skills.service';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockSkillsService } from '../+state/mock-skills-service';
import { SkillsFacade } from '../+state/skills.facade';
import { MockSkillsFacade } from '../+state/mock-skills-facade';

@Component({
  selector: 'client-skill-info-presenter',
  template: '',
  styleUrls: [],
})
class MockSkillInfoPresenterComponent {
  @Input() inputData: any;
}

describe('SkillInfoContainerComponent', () => {
  let component: SkillInfoContainerComponent;
  let fixture: ComponentFixture<SkillInfoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillInfoContainerComponent,
        MockSkillInfoPresenterComponent,
      ],
      providers: [
        { provide: SkillsFacade, useClass: MockSkillsFacade },
        {
          provide: SkillsService,
          useClass: MockSkillsService,
        },
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
