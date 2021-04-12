import { Inject, Injectable } from '@angular/core';
import { IBook } from '@workspace/api-interfaces';
import { ApiConstant } from '@workspace/constants';
import { HttpRequestService } from '@workspace/shared-service';
import { Observable } from 'rxjs';

@Injectable()
export class BookService {
  constructor(
    private httpRequestService: HttpRequestService,
    @Inject('apiUrl') private apiUrl: string
  ) {}
  constants = ApiConstant;

  fetchUserInfo(): Observable<IBook[]> {
    return this.httpRequestService.get<IBook[]>({
      url: `${this.apiUrl}${this.constants.books}`,
    });
  }
}
