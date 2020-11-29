import { SkillInfoPresenterInputData } from './skill-info-presenter-input-data';
import { Component, Input, OnInit } from '@angular/core';
import { ISkill } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-skill-info-presenter',
  templateUrl: './skill-info-presenter.component.html',
  styleUrls: ['./skill-info-presenter.component.scss'],
})
export class SkillInfoPresenterComponent implements OnInit {
  @Input() inputData: SkillInfoPresenterInputData;
  get dataSource$() {
    return this.inputData.dataSource$;
  }
  get displayedColumn() {
    return this.inputData.displayedColumn;
  }
  constructor() {}

  ngOnInit(): void {}
}
