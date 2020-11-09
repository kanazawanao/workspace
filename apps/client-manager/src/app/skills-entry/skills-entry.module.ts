import { SkillsEntryContainerComponent } from './container/skills-entry-container.component';
import { SkillsEntryPresenterComponent } from './presenter/skills-entry-presenter.component';
import { SkillsEntryRoutingModule } from './skills-entry-routing.module';
import { SkillsEntryGuard } from './skills-entry.guard';
import { SkillsEntryService } from './skills-entry.service';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/angular';
import { UiInputModule } from '@workspace/ui';
import * as fromSkillsEntry from './+state/skills-entry.reducer';
import { SkillsEntryEffects } from './+state/skills-entry.effects';
import { SkillsEntryFacade } from './+state/skills-entry.facade';
@NgModule({
  declarations: [SkillsEntryPresenterComponent, SkillsEntryContainerComponent],
  imports: [
    CommonModule,
    SkillsEntryRoutingModule,
    UiInputModule,
    MatButtonModule,
    StoreModule.forFeature(
      fromSkillsEntry.SKILLSENTRY_FEATURE_KEY,
      fromSkillsEntry.reducer
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
    EffectsModule.forRoot([SkillsEntryEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [SkillsEntryService, SkillsEntryFacade, SkillsEntryGuard],
})
export class SkillsEntryModule {}
