import { BaseComponent } from '../../../base/base.component';
import { SkillTypesService } from '../../skill-types.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ISkillType } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';
import { SkillTypesFacade } from '../../+state/skill-types.facade';

@Component({
  selector: 'client-manager-skill-types-list-container',
  templateUrl: './skill-types-list-container.component.html',
  styleUrls: ['./skill-types-list-container.component.scss'],
})
export class SkillTypesListContainerComponent
  extends BaseComponent
  implements OnInit, OnDestroy {
  skillTypes$: Observable<ISkillType[]> = this.skillTypesFacade.allSkillTypes$;
  displayedColumns: string[] = ['id', 'skillType', 'skillTypeName'];
  constructor(
    private skillTypesFacade: SkillTypesFacade,
    private skillTypesService: SkillTypesService
  ) {
    super();
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    super.ngOnDestroy();
  }
  selectEventListner(selectedValue: ISkillType) {
    this.skillTypesService.navigateSkillTypesEntry(selectedValue.id);
  }
}
