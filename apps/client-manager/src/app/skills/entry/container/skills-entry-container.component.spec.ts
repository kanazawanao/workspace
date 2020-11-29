import { SkillsEntryContainerComponent } from './skills-entry-container.component';
import { MockSkillsService } from '../../mock-skills.service';
import { SkillsService } from '../../skills.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SelectOption } from '@workspace/ui';
import { Observable } from 'rxjs';
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
  @Input() options$: Observable<SelectOption[]>;
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
          useClass: MockSkillsService,
        },
        {
          provide: SkillsFacade,
          useClass: MockSkillsFacade,
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
