import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as fromClientManager from './+state/client-manager.reducer';
import { ClientManagerEffects } from './+state/client-manager.effects';
import { ClientManagerFacade } from './+state/client-manager.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromClientManager.CLIENT_MANAGER_FEATURE_KEY,
      fromClientManager.reducer
    ),
    EffectsModule.forFeature([ClientManagerEffects]),
  ],
  providers: [ClientManagerFacade],
})
export class ClientManagerDataAccessModule {}
