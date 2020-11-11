import { SkillsEntryControlName } from '../skills-entry-control-name';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'client-manager-skills-entry-presenter',
  templateUrl: './skills-entry-presenter.component.html',
  styleUrls: ['./skills-entry-presenter.component.scss'],
})
export class SkillsEntryPresenterComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Output() registEvent = new EventEmitter();
  controlName = SkillsEntryControlName;
  constructor() {}

  ngOnInit(): void {}

  regist() {
    this.registEvent.emit();
  }
}
