import { BaseComponent } from '../../../base/base-component';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ISkillType } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-manager-skill-types-list-presenter',
  templateUrl: './skill-types-list-presenter.component.html',
  styleUrls: ['./skill-types-list-presenter.component.scss'],
})
export class SkillTypesListPresenterComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  @Input() skillTypes$: Observable<ISkillType[]>;
  @Input() displayedColumns: string[];
  constructor() {
    super();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
