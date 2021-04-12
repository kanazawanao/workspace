import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '@workspace/api-interfaces';

@Component({
  selector: 'workspace-book-presenter',
  templateUrl: './book-presenter.component.html',
  styleUrls: ['./book-presenter.component.scss'],
})
export class BookPresenterComponent implements OnInit {
  constructor() {}
  @Input() books: IBook[];
  ngOnInit(): void {}
}
