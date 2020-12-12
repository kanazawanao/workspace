import { ListDataSource } from './list-input-data';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() dataSource: ListDataSource[];
}
