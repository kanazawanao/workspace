import { Component, OnInit } from '@angular/core';
import { SidenavOption } from '@workspace/ui';

@Component({
  selector: 'workspace-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  constructor() {}
  title = 'client-manager';
  menuTitle = 'Menu';
  options: SidenavOption[] = [
    { value: 'skill-types', viewValue: 'SkillTypes' },
    { value: 'skills', viewValue: 'Skills' },
    { value: 'timelines', viewValue: 'Timelines' },
    { value: 'users', viewValue: 'Users' },
  ];
  ngOnInit(): void {}
}
