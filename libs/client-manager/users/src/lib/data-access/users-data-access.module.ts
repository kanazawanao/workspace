import { UsersDataAccessService } from './users-data-access.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UsersFacade } from './+state/users.facade';
import { UsersEffects } from './+state/users.effects';
import * as fromUsers from './+state/users.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.reducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
  providers: [UsersFacade, UsersDataAccessService],
})
export class UsersDataAccessModule {}
