import { PlaceDetailComponent } from './place-detail.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PlaceDetailComponent],
  imports: [CommonModule, MatCardModule, MatIconModule, MatDialogModule],
})
export class PlaceDetailModule {}
