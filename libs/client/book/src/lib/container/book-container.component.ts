import { BookService } from '../book.service';
import { Component, OnInit } from '@angular/core';
import { IBook } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'workspace-book-container',
  templateUrl: './book-container.component.html',
  styleUrls: ['./book-container.component.scss'],
})
export class BookContainerComponent implements OnInit {
  constructor(private bookService: BookService) {}
  books: Observable<IBook[]>;

  ngOnInit(): void {
    this.books = this.bookService.fetchUserInfo();
  }
}
