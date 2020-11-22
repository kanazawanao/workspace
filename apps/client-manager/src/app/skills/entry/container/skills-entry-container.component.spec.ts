import { SkillsEntryContainerComponent } from './skills-entry-container.component';
import { MockSkillsService } from '../../mock-skills.service';
import { SkillsService } from '../../skills.service';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MockSkillsFacade } from '../../+state/mock-skills.facade';
import { SkillsFacade } from '../../+state/skills.facade';

/** プレゼンタコンポーネントのモック */
@Component({
  selector: 'client-manager-skills-entry-presenter',
  template: '',
  styleUrls: [],
})
class MockSkillsEntryPresenterComponent {
  @Input() formGroup: FormGroup;
  @Output() registEvent = new EventEmitter();
}

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
        {
          provide: SkillsFacade,
          useValue: MockSkillsFacade,
        },
      ],
      imports: [CommonModule, ReactiveFormsModule],
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
