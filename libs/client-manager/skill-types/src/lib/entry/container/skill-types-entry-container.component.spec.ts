import { SkillTypesEntryContainerComponent } from './skill-types-entry-container.component';
import { MockSkillTypesService } from '../../mock-skill-types.service';
import { SkillTypesService } from '../../skill-types.service';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MockSkillTypesFacade } from '../../data-access/+state/mock-skill-types.facade';
import { SkillTypesFacade } from '../../data-access/+state/skill-types.facade';

@Component({
  selector: 'client-manager-skill-types-entry-presenter',
  template: '',
  styleUrls: [],
})
export class MockSkillTypesEntryPresenterComponent {
  @Input() formGroup: FormGroup;
  @Output() registEvent = new EventEmitter();
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
