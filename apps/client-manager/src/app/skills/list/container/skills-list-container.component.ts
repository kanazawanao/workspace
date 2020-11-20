import { BaseComponent } from '../../../base/base-component';
import { SkillsService } from '../../skills.service';
import { Component, OnInit } from '@angular/core';
import { ISkill } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-manager-skills-list-container',
  templateUrl: './skills-list-container.component.html',
  styleUrls: ['./skills-list-container.component.scss'],
})
export class SkillsListContainerComponent extends BaseComponent
  implements OnInit {
  skills$: Observable<ISkill[]>;
  displayedColumns: string[] = [
    'id',
    'skillType',
    'skillName',
    'experienceYears',
    'skillLevel',
  ];
  constructor(private skillsService: SkillsService) {
    super();
  }

  ngOnInit(): void {
    this.skills$ = this.skillsService.fetchSkillsInfo();
  }
}
