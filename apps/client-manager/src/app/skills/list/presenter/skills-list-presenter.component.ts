import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISkill } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-manager-skills-list-presenter',
  templateUrl: './skills-list-presenter.component.html',
  styleUrls: ['./skills-list-presenter.component.scss'],
})
export class SkillsListPresenterComponent implements OnInit {
  @Input() skills$: Observable<ISkill[]>;
  @Input() displayedColumns: string[];
  @Output() selectEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
