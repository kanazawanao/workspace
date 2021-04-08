import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { BookContainerComponent } from './container/book-container.component';
import { BookPresenterComponent } from './presenter/book-presenter.component';


@NgModule({
  declarations: [BookContainerComponent, BookPresenterComponent],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
