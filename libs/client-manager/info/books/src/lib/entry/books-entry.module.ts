import { BooksEntryGuard } from './books-entry.guard';
import { BooksEntryContainerComponent } from './container/books-entry-container.component';
import { BooksEntryPresenterComponent } from './presenter/books-entry-presenter.component';
import { BooksService } from '../books.service';
import { BooksDataAccessModule } from '../data-access/books-data-access.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { UiDatePickerModule, UiInputModule } from '@workspace/ui';
import { BooksFacade } from '../data-access/+state/books.facade';

@NgModule({
  declarations: [BooksEntryContainerComponent, BooksEntryPresenterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UiInputModule,
    UiDatePickerModule,
    MatButtonModule,
    BooksDataAccessModule,
  ],
  providers: [BooksFacade, BooksEntryGuard, BooksService],
})
export class BooksEntryModule {}
