import { AboutService } from '../about.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-about-container',
  templateUrl: './about-container.component.html',
  styleUrls: ['./about-container.component.scss'],
})
export class AboutContainerComponent implements OnInit {
  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {}

  fetchUserData(): Observable<IUser> {
    return this.aboutService.fetchUserInfo();
  }
}
