import { ListComponent } from './list.component';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {
  ListDataSource,
} from './list-input-data';

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

describe('ListPresenterComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MatListModule,
        MatIconModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    component.dataSource = ELEMENT_DATA;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
