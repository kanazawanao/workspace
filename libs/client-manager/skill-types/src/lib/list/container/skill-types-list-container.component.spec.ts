import { SkillTypesListContainerComponent } from './skill-types-list-container.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ISkillType } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';
import { MockSkillTypesFacade } from '../../data-access/+state/mock-skill-types.facade';
import { SkillTypesFacade } from '../../data-access/+state/skill-types.facade';
import { MockSkillTypesService } from '../../mock-skill-types.service';
import { SkillTypesService } from '../../skill-types.service';

@Component({
  selector: 'client-manager-skill-types-list-presenter',
  template: '',
  styleUrls: [],
})
export class MockSkillTypesListPresenterComponent {
  @Input() skillTypes$: Observable<ISkillType[]>;
  @Input() displayedColumns: string[];
  @Output() selectEvent = new EventEmitter();
}
describe('SkillTypesListContainerComponent', () => {
  let component: SkillTypesListContainerComponent;
  let fixture: ComponentFixture<SkillTypesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillTypesListContainerComponent,
        MockSkillTypesListPresenterComponent,
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
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
