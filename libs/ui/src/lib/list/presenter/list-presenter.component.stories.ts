import { ListPresenterComponent } from './list-presenter.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { boolean, number, text } from '@storybook/addon-knobs';
import {
  ListDataSource,
  ListPresenterInputData,
} from './list-presenter-input-data';
const ELEMENT_DATA: ListDataSource[] = [
  {
    header: 'header',
    icon: 'search',
    items: [
      {
        name: '名前',
        sentence: 'ここに文章が入ります',
      },
    ],
  },
];
const presenterInputData: ListPresenterInputData = {
  dataSource: ELEMENT_DATA,
};

export default {
  title: 'ListPresenterComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [CommonModule, ReactiveFormsModule, MatListModule, MatIconModule],
  },
  component: ListPresenterComponent,
  props: {
    inputData: presenterInputData,
  },
});
