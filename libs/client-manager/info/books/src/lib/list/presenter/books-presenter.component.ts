import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IBook } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-manager-books-presenter',
  templateUrl: './books-presenter.component.html',
  styleUrls: ['./books-presenter.component.scss'],
})
export class BooksPresenterComponent implements OnInit {
  constructor() {}

  @Input() books$: Observable<IBook[]>;
  @Input() displayedColumns: string[];
  @Output() selectEvent = new EventEmitter();

  ngOnInit(): void {}
}
