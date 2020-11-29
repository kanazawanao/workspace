import { BaseComponent } from '../../../base/base-component';
import { SkillTypesEntryControlName } from '../skill-types-entry-control-name';
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
  selector: 'client-manager-skill-types-entry-presenter',
  templateUrl: './skill-types-entry-presenter.component.html',
  styleUrls: ['./skill-types-entry-presenter.component.scss'],
})
export class SkillTypesEntryPresenterComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  @Input() formGroup: FormGroup;
  @Output() registEvent = new EventEmitter();
  controlName = SkillTypesEntryControlName;
  constructor() {
    super();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
