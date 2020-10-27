import { SkillsEntryModel } from '../presenter/skills-entry-model';
import { SkillsEntryService } from '../skills-entry.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'client-manager-skills-entry-container',
  templateUrl: './skills-entry-container.component.html',
  styleUrls: ['./skills-entry-container.component.scss'],
})
export class SkillsEntryContainerComponent implements OnInit {
  constructor(private skillsEntryService: SkillsEntryService) {}

  ngOnInit(): void {}

  registSkill(skill: SkillsEntryModel) {
    this.skillsEntryService.postSkill(skill);
  }
}
