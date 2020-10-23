import { Component } from '@angular/core';
import { IUser } from '@workspace/api-interfaces';
import { HttpRequestService } from '@workspace/shared-service';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private httpRequestService: HttpRequestService) {}

  hello$ = this.httpRequestService.get<IUser>({
    url: 'api/users/1',
  });
}
