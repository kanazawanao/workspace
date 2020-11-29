import { Component } from '@angular/core';
import { SidenavOption } from 'libs/ui/src/lib/sidenav/sidenav-option';

@Component({
  selector: 'client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor() {}
  title = 'client';
  menuTitle = 'Menu';
  options: SidenavOption[] = [
    { value: '/', viewValue: 'Top' },
    { value: '/about', viewValue: 'About' },
    { value: '/skill-info', viewValue: 'SkillInfo' },
    { value: '/timeline', viewValue: 'Timelines' },
  ];
}
