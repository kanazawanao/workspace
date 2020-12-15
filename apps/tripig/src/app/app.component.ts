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
  options: SidenavOption[] = [{ value: '/', viewValue: 'signup' }];
}
