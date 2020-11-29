import { SelectContainerComponent } from './container/select-container.component';
import { SelectPresenterComponent } from './presenter/select-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [SelectPresenterComponent, SelectContainerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  exports: [SelectContainerComponent],
})
export class UiSelectModule {}
