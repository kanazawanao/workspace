import { DatePickerContainerComponent } from './container/date-picker-container.component';
import { DatePickerPresenterComponent } from './presenter/date-picker-presenter.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [DatePickerContainerComponent, DatePickerPresenterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatMomentDateModule,
  ],
  exports: [DatePickerContainerComponent],
})
export class UiDatePickerModule {}
