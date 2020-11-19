import { BaseComponent } from '../../base/base-component';
import { SkillsService } from '../skills.service';
import { Component, OnInit } from '@angular/core';
import { ISkill } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';
@Component({
  selector: 'client-manager-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss'],
})
export class SkillsContainerComponent extends BaseComponent implements OnInit {
  constructor(private skillsService: SkillsService) {
    super();
  }
  skills$: Observable<ISkill[]>;
  displayedColumns: string[] = [
    'id',
    'skillType',
    'skillName',
    'experienceYears',
    'skillLevel',
  ];
  ngOnInit(): void {
    this.skills$ = this.skillsService.fetchSkillsInfo();
  }
}
