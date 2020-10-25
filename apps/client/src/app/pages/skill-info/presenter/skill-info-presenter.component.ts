import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'workspace-skill-info-presenter',
  templateUrl: './skill-info-presenter.component.html',
  styleUrls: ['./skill-info-presenter.component.scss'],
})
export class SkillInfoPresenterComponent implements OnInit {
  columns = ['name', 'years', 'skillLevel'];

  data = [
    { name: 'JavaScript', years: 1, skillLevel: 2 },
    { name: 'JQuery', years: 1, skillLevel: 1 },
    { name: 'TypeScript', years: 1, skillLevel: 4 },
    { name: 'C#', years: 2, skillLevel: 4 },
    { name: 'Java 7', years: 1, skillLevel: 3 },
    { name: 'GAS', years: 1, skillLevel: 3 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
