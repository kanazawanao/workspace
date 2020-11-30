import { BaseComponent } from '../../../base/base-component';
import { ISkill } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'client-manager-skills-list-presenter',
  templateUrl: './skills-list-presenter.component.html',
  styleUrls: ['./skills-list-presenter.component.scss'],
})
export class SkillsListPresenterComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  @Input() skills$: Observable<ISkill[]>;
  @Input() displayedColumns: string[];
  @Output() selectEvent = new EventEmitter();
  constructor() {
    super();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
}
