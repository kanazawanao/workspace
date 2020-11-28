import { BaseComponent } from '../../../base/base-component';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'client-manager-skill-types-list-container',
  templateUrl: './skill-types-list-container.component.html',
  styleUrls: ['./skill-types-list-container.component.scss'],
})
export class SkillTypesListContainerComponent
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
