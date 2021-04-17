import { PlaceDetailComponent } from './place-detail.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RatingStarsModule } from '@workspace/tripig/ui/rating-stars';

@NgModule({
  declarations: [PlaceDetailComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    RatingStarsModule,
  ],
})
export class PlaceDetailModule {}
