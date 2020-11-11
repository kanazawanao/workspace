import { UsersEntryContainerComponent } from './container/users-entry-container.component';
import { UsersEntryPresenterComponent } from './presenter/users-entry-presenter.component';
import { UsersEntryRoutingModule } from './users-entry-routing.module';
import { UsersEntryGuard } from './users-entry.guard';
import { UsersEntryService } from './users-entry.service';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/angular';
import { UiInputModule } from '@workspace/ui';
import * as fromUsersEntry from './+state/users-entry.reducer';
import { UsersEntryEffects } from './+state/users-entry.effects';
import { UsersEntryFacade } from './+state/users-entry.facade';

@NgModule({
  declarations: [UsersEntryContainerComponent, UsersEntryPresenterComponent],
  imports: [
    CommonModule,
    UsersEntryRoutingModule,
    UiInputModule,
    MatButtonModule,
    ,
    StoreModule.forFeature(
      fromUsersEntry.USERSENTRY_FEATURE_KEY,
      fromUsersEntry.reducer
    ),
    NxModule.forRoot(),
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([UsersEntryEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [UsersEntryService, UsersEntryFacade, UsersEntryGuard],
})
export class UsersEntryModule {}
