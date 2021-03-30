import { AboutService } from '../about.service';
import { Component, OnInit } from '@angular/core';
import { IUser } from '@workspace/api-interfaces';
import { ListDataSource } from '@workspace/ui';
import { Observable } from 'rxjs';

@Component({
  selector: 'client-about-container',
  templateUrl: './about-container.component.html',
  styleUrls: ['./about-container.component.scss'],
})
export class AboutContainerComponent implements OnInit {
  constructor(private aboutService: AboutService) {}
  userInfo: ListDataSource[] = [];
  user: IUser;
  ngOnInit(): void {
    this.fetchUserData();
  }

  fetchUserData() {
    this.aboutService.fetchUserInfo().subscribe((user) => {
      this.userInfo.push({
        header: 'About Me',
        items: [
          {
            icon: 'info',
            name: '名前',
            sentence: `${user.firstName} ${user.lastName}`,
          },
          {
            icon: 'cake',
            name: '誕生日',
            sentence: new Date(user.birthDay).toLocaleDateString(),
          },
          {
            icon: 'location_on',
            name: '住所',
            sentence: user.address,
          },
          {
            icon: 'school',
            name: '卒業',
            sentence: new Date(user.graduationDate).toLocaleDateString(),
          },
        ],
      });
    });
  }
}
