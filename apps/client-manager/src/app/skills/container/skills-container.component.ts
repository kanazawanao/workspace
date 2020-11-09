import { SkillsService } from '../skills.service';
import { Component, OnInit } from '@angular/core';
import { ISkill } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';
@Component({
  selector: 'client-manager-skills-container',
  templateUrl: './skills-container.component.html',
  styleUrls: ['./skills-container.component.scss'],
})
export class SkillsContainerComponent implements OnInit {
  constructor(private skillsService: SkillsService) {}
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
