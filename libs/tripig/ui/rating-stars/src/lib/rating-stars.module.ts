import { RatingStarsComponent } from './rating-stars.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [RatingStarsComponent],
  imports: [CommonModule, MatIconModule],
  exports: [RatingStarsComponent],
})
export class RatingStarsModule {}
