import { Category } from './category.class';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ui-tab-category',
  templateUrl: './tab-category.component.html',
  styleUrls: ['./tab-category.component.scss'],
})
export class TabCategoryComponent implements OnInit {
  backgroundColor = '#81d6f8';
  color = '#f0fff3';
  selected: Category;
  @Input() categories: Category[];
  @Output() selectEvent = new EventEmitter<Category>();
  constructor() {}

  ngOnInit(): void {}

  onTabClick(selected: Category) {
    this.selectEvent.emit(selected);
  }
}
