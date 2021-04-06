import { BooksService } from '../../books.service';
import { Component, OnInit } from '@angular/core';
import { IBook } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';
import { BooksFacade } from '../../data-access/+state/books.facade';

@Component({
  selector: 'client-manager-books-container',
  templateUrl: './books-container.component.html',
  styleUrls: ['./books-container.component.scss'],
})
export class BooksContainerComponent implements OnInit {
  constructor(
    private booksFacade: BooksFacade,
    private booksService: BooksService
  ) {}

  books$: Observable<IBook[]> = this.booksFacade.allBooks$;
  displayedColumns: string[] = ['title', 'author'];

  ngOnInit(): void {}

  selectEventListner(selectedValue: IBook) {
    this.booksService.navigateBooksEntry(selectedValue.id);
  }
}
