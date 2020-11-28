import { BaseComponent } from '../../../base/base-component';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'client-manager-skill-types-list-presenter',
  templateUrl: './skill-types-list-presenter.component.html',
  styleUrls: ['./skill-types-list-presenter.component.scss'],
})
export class SkillTypesListPresenterComponent
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
