import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workspace-skill-info-presenter',
  templateUrl: './skill-info-presenter.component.html',
  styleUrls: ['./skill-info-presenter.component.scss'],
})
export class SkillInfoPresenterComponent implements OnInit {
  columns = ['name', 'experienceYears', 'skillLevel'];

  data = [
    { name: 'JavaScript', experienceYears: 1, skillLevel: 2 },
    { name: 'JQuery', experienceYears: 1, skillLevel: 1 },
    { name: 'TypeScript', yeaexperienceYearsrs: 1, skillLevel: 4 },
    { name: 'C#', experienceYears: 2, skillLevel: 4 },
    { name: 'Java 7', experienceYears: 1, skillLevel: 3 },
    { name: 'GAS', experienceYears: 1, skillLevel: 3 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
