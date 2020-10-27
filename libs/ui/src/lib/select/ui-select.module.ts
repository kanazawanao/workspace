import { SelectContainerComponent } from './container/select-container.component';
import { SelectPresenterComponent } from './presenter/select-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [SelectPresenterComponent, SelectContainerComponent],
  imports: [CommonModule, MatSelectModule, MatFormFieldModule],
})
export class UiSelectModule {}
