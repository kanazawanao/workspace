import { BaseComponent } from '../../../base/base-component';
import { UsersService } from '../../users.service';
import { UsersEntryControlName } from '../users-entry-control-name';
import { UsersEntryModel } from '../users-entry-model';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { UsersFacade } from '../../+state/users.facade';

@Component({
  selector: 'client-manager-users-entry-container',
  templateUrl: './users-entry-container.component.html',
  styleUrls: ['./users-entry-container.component.scss'],
})
export class UsersEntryContainerComponent extends BaseComponent
  implements OnInit {
  formGroup: FormGroup;
  controlName = UsersEntryControlName;
  editMode$ = this.usersEntryFacade.editMode$;
  constructor(
    private usersEntryService: UsersService,
    private usersEntryFacade: UsersFacade
  ) {
    super();
  }

  ngOnInit(): void {
    var entryModel: UsersEntryModel = new UsersEntryModel();
    this.formGroup = this.usersEntryService.generateFormGroup(entryModel);
    this.usersEntryFacade.wokkUserEntry$
      .pipe(takeUntil(this.unsubscribeObservable$))
      .subscribe((x) => {
        if (x) {
          this.formGroup.get(this.controlName.lastName).setValue(x.lastName);
          this.formGroup.get(this.controlName.firstName).setValue(x.firstName);
          this.formGroup.get(this.controlName.email).setValue(x.email);
          this.formGroup.get(this.controlName.password).setValue(x.password);
          this.formGroup.get(this.controlName.birthDay).setValue(x.birthDay);
        }
      });
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  regist() {
    var registData = new UsersEntryModel();
    registData.lastName = this.formGroup.get(this.controlName.lastName).value;
    registData.firstName = this.formGroup.get(this.controlName.firstName).value;
    registData.email = this.formGroup.get(this.controlName.email).value;
    registData.password = this.formGroup.get(this.controlName.password).value;
    registData.birthDay = this.formGroup.get(this.controlName.birthDay).value;
    console.log(registData);
    this.registSkill(registData);
  }

  registSkill(user: UsersEntryModel) {
    this.usersEntryService.postUser(user).subscribe((x) => console.log(x));
  }
}
