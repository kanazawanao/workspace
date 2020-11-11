import { UsersEntryService } from '../users-entry.service';
import { Component, OnInit } from '@angular/core';
import { UsersEntryFacade } from '../+state/users-entry.facade';

@Component({
  selector: 'client-manager-users-entry-container',
  templateUrl: './users-entry-container.component.html',
  styleUrls: ['./users-entry-container.component.scss'],
})
export class UsersEntryContainerComponent implements OnInit {
  constructor(
    private usersEntryService: UsersEntryService,
    private usersEntryFacade: UsersEntryFacade
  ) {}
  workUserEntry = this.usersEntryFacade.wokkUserEntry$;
  ngOnInit(): void {}
}
