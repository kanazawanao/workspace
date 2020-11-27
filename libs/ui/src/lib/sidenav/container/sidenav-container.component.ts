import { SidenavPresenterInputData } from '../presenter/sidenav-presenter-input-data';
import { SidenavOption } from '../sidenav-option';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-sidenav-container',
  templateUrl: './sidenav-container.component.html',
  styleUrls: ['./sidenav-container.component.scss'],
})
export class SidenavContainerComponent implements OnInit {
  @Input() headerTitle: string;
  @Input() menuTitle: string;
  @Input() options: SidenavOption[];
  presenterInputData: SidenavPresenterInputData;
  constructor() {}

  ngOnInit(): void {
    this.setPresenterInputData();
  }
  setPresenterInputData(): void {
    this.presenterInputData = {
      headerTitle: this.headerTitle,
      menuTitle: this.menuTitle,
      options: this.options,
    };
  }
}
