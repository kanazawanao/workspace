import { Component } from '@angular/core';
import { SidenavOption } from '@workspace/ui';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tripig';
  menuTitle = 'Menu';
  options: SidenavOption[] = [
    { value: '/signup', viewValue: 'signup' },
    { value: '/signin', viewValue: 'signin' },
    { value: '/map/point-search', viewValue: 'point-search' },
    { value: '/map/route-search', viewValue: 'route-search' },
  ];
}
