import { Component, Input, OnInit } from '@angular/core';
import { ISkill } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-manager-skills-presenter',
  templateUrl: './skills-presenter.component.html',
  styleUrls: ['./skills-presenter.component.scss'],
})
export class SkillsPresenterComponent implements OnInit {
  @Input() skills$: Observable<ISkill[]>;
  displayedColumns: string[] = [
    'id',
    'skillType',
    'skillName',
    'experienceYears',
    'skillLevel',
  ];
  constructor() {}

  ngOnInit(): void {}
}
