import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ListDataSource } from './list-input-data';

const ELEMENT_DATA: ListDataSource[] = [
  {
    header: 'header',
    items: [
      {
        icon: 'search',
        name: '名前',
        sentence: 'ここに文章が入ります',
      },
    ],
  },
  {
    header: 'header',
    items: [
      {
        icon: 'search',
        name: '名前',
        sentence: 'ここに文章が入ります',
      },
    ],
  },
];

export default {
  title: 'ListComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [CommonModule, ReactiveFormsModule, MatListModule, MatIconModule],
  },
  component: ListComponent,
  props: {
    dataSource: ELEMENT_DATA,
  },
});
