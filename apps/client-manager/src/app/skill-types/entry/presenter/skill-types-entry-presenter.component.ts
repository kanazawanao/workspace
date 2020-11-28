import { BaseComponent } from '../../../base/base-component';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'client-manager-skill-types-entry-presenter',
  templateUrl: './skill-types-entry-presenter.component.html',
  styleUrls: ['./skill-types-entry-presenter.component.scss'],
})
export class SkillTypesEntryPresenterComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  constructor() {
    super();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
