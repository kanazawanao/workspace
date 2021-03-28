import { SkillsListContainerComponent } from './skills-list-container.component';
import { MockSkillsService } from '../../mock-skills.service';
import { SkillsService } from '../../skills.service';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ISkill } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';
import { MockSkillsFacade } from '../../data-access/+state/mock-skills.facade';
import { SkillsFacade } from '../../data-access/+state/skills.facade';

@Component({
  selector: 'client-manager-skills-list-presenter',
  template: '',
  styleUrls: [],
})
export class MockSkillsListPresenterComponent {
  @Input() skills$: Observable<ISkill[]>;
  @Input() displayedColumns: string[];
}

describe('SkillsListContainerComponent', () => {
  let component: SkillsListContainerComponent;
  let fixture: ComponentFixture<SkillsListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillsListContainerComponent,
        MockSkillsListPresenterComponent,
      ],
      providers: [
        {
          provide: SkillsFacade,
          useClass: MockSkillsFacade,
        },
        {
          provide: SkillsService,
          useClass: MockSkillsService,
        },
      ],
      imports: [CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
