import { BaseComponent } from '../../../base/base.component';
import { SkillsService } from '../../skills.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ISkill } from '@workspace/api-interfaces';
import { SkillsFacade } from '@workspace/client-manager/data-accesss';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-manager-skills-list-container',
  templateUrl: './skills-list-container.component.html',
  styleUrls: ['./skills-list-container.component.scss'],
})
export class SkillsListContainerComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  skills$: Observable<ISkill[]> = this.skillsFacade.allSkills$;
  displayedColumns: string[] = [
    'id',
    'skillType',
    'skillName',
    'experienceYears',
    'skillLevel',
  ];
  constructor(
    private skillsFacade: SkillsFacade,
    private skillsService: SkillsService
  ) {
    super();
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  selectEventListner(selectedValue: ISkill) {
    this.skillsService.navigateSkillTypesEntry(selectedValue.id);
  }
}
