import { SkillsEntryContainerComponent } from './skills-entry-container.component';
import { MockSkillsService } from '../../mock-skills.service';
import { SkillsService } from '../../skills.service';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

/** プレゼンタコンポーネントのモック */
@Component({
  selector: 'client-manager-skills-entry-presenter',
  template: '',
  styleUrls: [],
})
class MockSkillsEntryPresenterComponent {}

describe('SkillsEntryContainerComponent', () => {
  let component: SkillsEntryContainerComponent;
  let fixture: ComponentFixture<SkillsEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillsEntryContainerComponent,
        MockSkillsEntryPresenterComponent,
      ],
      providers: [
        {
          provide: SkillsService,
          useValue: MockSkillsService,
        },
      ],
    }).compileComponents();
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
