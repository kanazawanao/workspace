import { BaseComponent } from '../../../base/base-component';
import { SkillsEntryControlName } from '../skills-entry-control-name';
import { FormGroup } from '@angular/forms';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'client-manager-skills-entry-presenter',
  templateUrl: './skills-entry-presenter.component.html',
  styleUrls: ['./skills-entry-presenter.component.scss'],
})
export class SkillsEntryPresenterComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  @Input() formGroup: FormGroup;
  @Output() registEvent = new EventEmitter();
  controlName = SkillsEntryControlName;
  constructor() {
    super();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
