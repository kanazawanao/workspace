import { TabCategoryComponent } from './tab-category.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [TabCategoryComponent],
  imports: [CommonModule, MatTabsModule, MatIconModule, MatTooltipModule],
  exports: [TabCategoryComponent],
})
export class TabCategoryModule {}
