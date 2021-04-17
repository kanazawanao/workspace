import { RatingStarsComponent } from './rating-stars/rating-stars.component';
import { SuggestListComponent } from './suggest-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [SuggestListComponent, RatingStarsComponent],
  imports: [CommonModule, MatButtonModule, MatListModule, MatIconModule],
  exports: [SuggestListComponent],
})
export class SuggestListModule {}
