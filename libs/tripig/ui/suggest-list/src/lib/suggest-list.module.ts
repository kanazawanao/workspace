import { SuggestListComponent } from './suggest-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RatingStarsModule } from '@workspace/tripig/ui/rating-stars';

@NgModule({
  declarations: [SuggestListComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    RatingStarsModule,
  ],
  exports: [SuggestListComponent],
})
export class SuggestListModule {}
