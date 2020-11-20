import { UsersListContainerComponent } from './container/users-list-container.component';
import { UsersListPresenterComponent } from './presenter/users-list-presenter.component';
import { UsersListRoutingModule } from './users-list-routing.module';
import { UsersListGuard } from './users-list.guard';
import { UsersService } from '../users.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UiTableModule } from '@workspace/ui';
import * as fromUsers from '../+state/users.reducer';
import { UsersEffects } from '../+state/users.effects';
import { UsersFacade } from '../+state/users.facade';

@NgModule({
  declarations: [UsersListPresenterComponent, UsersListContainerComponent],
  imports: [
    CommonModule,
    UsersListRoutingModule,
    UiTableModule,
    StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.reducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
  providers: [UsersService, UsersFacade, UsersListGuard],
})
export class UsersListModule {}
