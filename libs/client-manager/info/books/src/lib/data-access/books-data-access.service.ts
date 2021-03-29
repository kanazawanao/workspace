import { BooksEntryModel } from '../books-entry.model';
import { Inject, Injectable } from '@angular/core';
import { IBook } from '@workspace/api-interfaces';
import { ApiConstant } from '@workspace/constants';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class BooksDataAccessService {
  constructor(
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}
  constants = ApiConstant;

  fetchBooks(): Observable<IBook[]> {
    const res = this.httpRequestService.get<IBook[]>({
      url: `${this.apiUrl}${this.constants.books}`,
    });
    return res;
  }

  fetchBook(id: string): Observable<IBook> {
    const res = this.httpRequestService.get<IBook>({
      url: `${this.apiUrl}${this.constants.books}/${id}`,
    });
    return res;
  }

  postBook(skill: BooksEntryModel): Observable<IBook> {
    const res = this.httpRequestService.post<IBook>({
      url: `${this.apiUrl}${this.constants.books}`,
      body: skill,
    });
    return res;
  }

  updateBook(id: number, skill: BooksEntryModel): Observable<IBook> {
    const res = this.httpRequestService.put<IBook>({
      url: `${this.apiUrl}${this.constants.books}/${id}`,
      body: skill,
    });
    return res;
  }

  deleteBook(id: number) {
    const res = this.httpRequestService.delete({
      url: `${this.apiUrl}${this.constants.books}/${id}`,
    });
    return res;
  }
}
