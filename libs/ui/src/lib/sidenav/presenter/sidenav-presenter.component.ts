import { SidenavPresenterInputData } from './sidenav-presenter-input-data';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'ui-sidenav-presenter',
  templateUrl: './sidenav-presenter.component.html',
  styleUrls: ['./sidenav-presenter.component.scss'],
})
export class SidenavPresenterComponent implements OnInit {
  @Input() inputData: SidenavPresenterInputData;
  get options() {
    return this.inputData.options;
  }
  get title() {
    return this.inputData.headerTitle;
  }
  get menuTitle() {
    return this.inputData.menuTitle;
  }
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {}
}
