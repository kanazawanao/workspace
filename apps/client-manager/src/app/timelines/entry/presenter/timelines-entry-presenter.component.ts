import { BaseComponent } from '../../../base/base-component';
import { TimelinesEntryControlName } from '../skills-entry-control-name';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'client-manager-timelines-entry-presenter',
  templateUrl: './timelines-entry-presenter.component.html',
  styleUrls: ['./timelines-entry-presenter.component.scss'],
})
export class TimelinesEntryPresenterComponent
  extends BaseComponent
  implements OnInit {
  @Input() formGroup: FormGroup;
  @Output() registEvent = new EventEmitter();
  controlName = TimelinesEntryControlName;
  constructor() {
    super();
  }

  ngOnInit(): void {}
}
