import { Component, OnInit } from '@angular/core';
import { ListDataSource } from '@workspace/ui';

@Component({
  selector: 'client-about-presenter',
  templateUrl: './about-presenter.component.html',
  styleUrls: ['./about-presenter.component.scss'],
})
export class AboutPresenterComponent implements OnInit {
  dataSource: ListDataSource[] = [
    {
      header: 'about me',
      icon: 'info',
      items: [
        {
          name: '名前',
          sentence: 'ここに文章が入ります',
        },
      ],
    },
    {
      header: '名前',
      icon: 'account_circle',
      items: [
        {
          name: '金澤直',
          sentence: '',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
