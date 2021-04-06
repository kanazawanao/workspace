import { Component, Input, OnInit } from '@angular/core';
import { ListDataSource } from '@workspace/ui';

@Component({
  selector: 'client-about-presenter',
  templateUrl: './about-presenter.component.html',
  styleUrls: ['./about-presenter.component.scss'],
})
export class AboutPresenterComponent implements OnInit {
  @Input() dataSource: ListDataSource[] = [];
  constructor() {}

  ngOnInit(): void {}
}
