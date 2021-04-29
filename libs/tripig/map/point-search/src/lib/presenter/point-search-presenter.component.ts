import { FormGroup } from '@angular/forms';
import { CATEGORIES, Category, MapComponent } from '@workspace/ui';
import { Place } from 'libs/tripig/models/place';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'point-search-presenter',
  templateUrl: './point-search-presenter.component.html',
  styleUrls: ['./point-search-presenter.component.scss'],
})
export class PointSearchPresenterComponent implements OnInit {
  @Input() center?: google.maps.LatLng;
  @Input() formGroup: FormGroup;
  @Input() suggestList: Place[];
  @Input() selectedList: Place[];
  @Input() hasNextPage: boolean;
  @Output() searchEvent = new EventEmitter();
  @Output() selectEvent = new EventEmitter();
  @Output() changeCategoryEvent = new EventEmitter();
  @Output() nextPageEvent = new EventEmitter();
  @ViewChild(MapComponent) mapComponent!: MapComponent;
  categories: Category[] = CATEGORIES;
  constructor() {}

  ngOnInit(): void {}
}
