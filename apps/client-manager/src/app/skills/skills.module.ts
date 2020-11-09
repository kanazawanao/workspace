import { SkillsContainerComponent } from './container/skills-container.component';
import { SkillsPresenterComponent } from './presenter/skills-presenter.component';
import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsService } from './skills.service';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NxModule } from '@nrwl/angular';
import { UiTableModule } from '@workspace/ui';
import * as fromSkills from './+state/skills.reducer';
import { SkillsEffects } from './+state/skills.effects';
import { SkillsFacade } from './+state/skills.facade';

@NgModule({
  declarations: [SkillsContainerComponent, SkillsPresenterComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    UiTableModule,
    StoreModule.forFeature(fromSkills.SKILLS_FEATURE_KEY, fromSkills.reducer),
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
    EffectsModule.forRoot([SkillsEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [SkillsService, SkillsFacade],
})
export class SkillsModule {}
