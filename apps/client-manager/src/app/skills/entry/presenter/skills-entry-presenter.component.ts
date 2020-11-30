import { SkillsEntryControlName } from '../skills-entry-control-name';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectOption } from '@workspace/ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-manager-skills-entry-presenter',
  templateUrl: './skills-entry-presenter.component.html',
  styleUrls: ['./skills-entry-presenter.component.scss'],
})
export class SkillsEntryPresenterComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Input() options$: Observable<SelectOption[]>;
  @Output() registEvent = new EventEmitter();
  controlName = SkillsEntryControlName;
  constructor() {}

  ngOnInit(): void {}
}
