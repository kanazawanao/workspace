import { SkillInfoPresenterInputData } from '../presenter/skill-info-presenter-input-data';
import { SkillsService } from '../skills.service';
import { Component, OnInit } from '@angular/core';
import { SkillsFacade } from '../+state/skills.facade';

@Component({
  selector: 'client-skill-info-container',
  templateUrl: './skill-info-container.component.html',
  styleUrls: ['./skill-info-container.component.scss'],
})
export class SkillInfoContainerComponent implements OnInit {
  presenterInputData: SkillInfoPresenterInputData;
  constructor(
    private skillsFacade: SkillsFacade,
    private skillsService: SkillsService
  ) {}

  ngOnInit(): void {
    this.skillsService.fetchInitData();
    this.setSkillInfoPresenterInputData();
  }

  setSkillInfoPresenterInputData() {
    this.presenterInputData = {
      dataSource$: this.skillsFacade.allSkills$,
      displayedColumn: ['skillName', 'experienceYears', 'skillLevel'],
    };
  }
}
