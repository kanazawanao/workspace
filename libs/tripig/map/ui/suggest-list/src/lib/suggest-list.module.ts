import { SuggestListComponent } from './suggest-list.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [SuggestListComponent],
  imports: [CommonModule, MatListModule, MatIconModule],
  exports: [SuggestListComponent],
})
export class SuggestListModule {}
