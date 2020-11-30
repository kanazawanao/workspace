import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISkillType } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-manager-skill-types-list-presenter',
  templateUrl: './skill-types-list-presenter.component.html',
  styleUrls: ['./skill-types-list-presenter.component.scss'],
})
export class SkillTypesListPresenterComponent implements OnInit {
  @Input() skillTypes$: Observable<ISkillType[]>;
  @Input() displayedColumns: string[];
  @Output() selectEvent = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}
