import { FormGroup } from '@angular/forms';
import { CATEGORIES, Category, MapComponent } from '@workspace/ui';
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
  template: '',
})
export class MockPointSearchPresenterComponent implements OnInit {
  @Input() center?: any;
  @Input() formGroup?: any;
  @Input() suggestList?: any;
  @Input() hasNextPage: boolean;
  @Output() searchEvent = new EventEmitter();
  @Output() changeCategoryEvent = new EventEmitter();
  @Output() nextPageEvent = new EventEmitter();
  @ViewChild('') mapComponent?: any;
  categories: Category[] = CATEGORIES;
  constructor() {}

  ngOnInit(): void {}
}
