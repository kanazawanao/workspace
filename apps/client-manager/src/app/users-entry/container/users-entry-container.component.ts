import { BaseComponent } from '../../base/base-component';
import { UsersEntryModel } from '../presenter/users-entry-model';
import { UsersEntryControlName } from '../users-entry-control-name';
import { UsersEntryService } from '../users-entry.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersEntryFacade } from '../+state/users-entry.facade';

@Component({
  selector: 'client-manager-users-entry-container',
  templateUrl: './users-entry-container.component.html',
  styleUrls: ['./users-entry-container.component.scss'],
})
export class UsersEntryContainerComponent extends BaseComponent
  implements OnInit {
  formGroup: FormGroup;
  controlName = UsersEntryControlName;
  constructor(
    private usersEntryService: UsersEntryService,
    private usersEntryFacade: UsersEntryFacade
  ) {
    super();
  }
  workUserEntry = this.usersEntryFacade.wokkUserEntry$;
  ngOnInit(): void {
    var entryModel: UsersEntryModel = new UsersEntryModel();
    this.formGroup = this.usersEntryService.generateFormGroup(entryModel);
    this.usersEntryFacade.wokkUserEntry$.subscribe((x) => {
      if (x) {
        this.formGroup.get(this.controlName.lastName).setValue(x.lastName);
        this.formGroup.get(this.controlName.firstName).setValue(x.firstName);
        this.formGroup.get(this.controlName.email).setValue(x.email);
        this.formGroup.get(this.controlName.password).setValue(x.password);
        this.formGroup.get(this.controlName.birthDay).setValue(x.birthDay);
      }
    });
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
