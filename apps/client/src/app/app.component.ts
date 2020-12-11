import { Component } from '@angular/core';
import { SidenavOption } from '@workspace/ui';

@Component({
  selector: 'client-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client';
  menuTitle = 'Menu';
  options: SidenavOption[] = [
    { value: '/', viewValue: 'Top' },
    { value: '/about', viewValue: 'About' },
    { value: '/skill-info', viewValue: 'SkillInfo' },
    { value: '/timeline', viewValue: 'Timelines' },
  ];
}
