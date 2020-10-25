import { ListContainerComponent } from './list-container.component';
import { ListDataSource } from '../presenter/list-presenter-input-data';
import { UiListModule } from '../ui-list.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
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
export default {
  title: 'ListContainerComponent',
};

export const primary = () => ({
  moduleMetadata: {
    imports: [
      CommonModule,
      ReactiveFormsModule,
      MatListModule,
      MatIconModule,
      UiListModule,
    ],
  },
  component: ListContainerComponent,
  props: {
    dataSource: ELEMENT_DATA,
  },
});
