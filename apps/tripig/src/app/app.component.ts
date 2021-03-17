import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidenavOption } from '@workspace/ui';

@Component({
  selector: 'workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot.url);
  }

  title = 'tripig';
  menuTitle = 'Menu';
  options: SidenavOption[] = [
    { value: '/signup', viewValue: 'signup' },
    { value: '/signin', viewValue: 'signin' },
    { value: '/map/point-search', viewValue: 'point-search' },
    { value: '/map/route-search', viewValue: 'route-search' },
  ];
}
