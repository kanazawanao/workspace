import { SkillTypesEntryContainerComponent } from './skill-types-entry-container.component';
import { MockSkillTypesService } from '../../mock-skill-types.service';
import { SkillTypesService } from '../../skill-types.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MockSkillTypesFacade } from '../../data-access/+state/mock-skill-types.facade';
import { SkillTypesFacade } from '../../data-access/+state/skill-types.facade';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EditType } from '@workspace/constants';

@Component({
  selector: 'client-manager-skill-types-entry-presenter',
  template: '',
  styleUrls: [],
})
export class MockSkillTypesEntryPresenterComponent {
  @Input() skillTypesForm: FormGroup;
  @Input() editMode: EditType;
  @Output() registEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
}

describe('SkillTypesEntryContainerComponent', () => {
  let component: SkillTypesEntryContainerComponent;
  let fixture: ComponentFixture<SkillTypesEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillTypesEntryContainerComponent,
        MockSkillTypesEntryPresenterComponent,
      ],
      providers: [
        {
          provide: SkillTypesService,
          useClass: MockSkillTypesService,
        },
        {
          provide: SkillTypesFacade,
          useClass: MockSkillTypesFacade,
        },
      ],
      imports: [CommonModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypesEntryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
