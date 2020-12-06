import { UsersEntryModel } from '../../users-entry.model';
import { UsersService } from '../../users.service';
import { UsersEntryControlName } from '../users-entry-control-name';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UsersFacade } from '../../data-access/+state/users.facade';

@Component({
  selector: 'client-manager-users-entry-container',
  templateUrl: './users-entry-container.component.html',
  styleUrls: ['./users-entry-container.component.scss'],
})
export class UsersEntryContainerComponent implements OnInit {
  formGroup: FormGroup;
  controlName = UsersEntryControlName;
  editMode$ = this.usersFacade.editMode$;

  constructor(
    private usersService: UsersService,
    private usersFacade: UsersFacade
  ) {}

  ngOnInit(): void {
    this.formGroup = this.usersService.generateFormGroup();
    this.usersFacade.wokkUserEntry$.subscribe((x) => {
      if (x) {
        this.formGroup.get(this.controlName.lastName).setValue(x.lastName);
        this.formGroup.get(this.controlName.firstName).setValue(x.firstName);
        this.formGroup.get(this.controlName.email).setValue(x.email);
        this.formGroup.get(this.controlName.password).setValue(x.password);
        this.formGroup.get(this.controlName.birthDay).setValue(x.birthDay);
        this.formGroup
          .get(this.controlName.graduationDate)
          .setValue(x.graduationDate);
        this.formGroup.get(this.controlName.sex).setValue(x.sex);
        this.formGroup
          .get(this.controlName.qualification)
          .setValue(x.qualification);
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
    registData.graduationDate = this.formGroup.get(
      this.controlName.graduationDate
    ).value;
    registData.sex = this.formGroup.get(this.controlName.sex).value;
    registData.qualification = this.formGroup.get(
      this.controlName.qualification
    ).value;
    this.usersFacade.createUSer(registData);
  }
}
