import { SkillTypesEntryControlName } from '../skill-types-entry-control-name';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'client-manager-skill-types-entry-presenter',
  templateUrl: './skill-types-entry-presenter.component.html',
  styleUrls: ['./skill-types-entry-presenter.component.scss'],
})
export class SkillTypesEntryPresenterComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Output() registEvent = new EventEmitter();
  controlName = SkillTypesEntryControlName;
  constructor() {}

  ngOnInit(): void {}
}
