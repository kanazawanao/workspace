import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CATEGORIES, Category, MapComponent } from '@workspace/ui';

@Component({
  selector: 'route-search-presenter',
  templateUrl: './route-search-presenter.component.html',
  styleUrls: ['./route-search-presenter.component.scss'],
})
export class RouteSearchPresenterComponent implements OnInit {
  constructor() {}

  @Input() formGroup: FormGroup;
  @ViewChild(MapComponent) mapComponent!: MapComponent;
  categories: Category[] = CATEGORIES;
  ngOnInit(): void {}
}
