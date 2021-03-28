import { Component } from '@angular/core';
import { SidenavOption } from '@workspace/ui';

@Component({
  selector: 'client-manager-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'client-manager';
  menuTitle = 'Menu';
  options: SidenavOption[] = [
    { value: '/login', viewValue: 'Login' },
    { value: '/sign-up', viewValue: 'SignUp' },
    { value: '/skills', viewValue: 'Skills' },
    { value: '/skills/entry', viewValue: 'SkillsEntry' },
    { value: '/users', viewValue: 'Users' },
    { value: '/users/entry', viewValue: 'UsersEntry' },
    { value: '/timelines', viewValue: 'Timelines' },
    { value: '/timelines/entry', viewValue: 'TimelinesEntry' },
    { value: '/skill-types', viewValue: 'SkillTypes' },
    { value: '/skill-types/entry', viewValue: 'SkillTypesEntry' },
  ];
}
