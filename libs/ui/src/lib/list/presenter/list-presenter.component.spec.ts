import { ListPresenterComponent } from './list-presenter.component';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
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
describe('ListPresenterComponent', () => {
  let component: ListPresenterComponent;
  let fixture: ComponentFixture<ListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPresenterComponent],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        MatListModule,
        MatIconModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPresenterComponent);
    component = fixture.componentInstance;
    component.inputData = presenterInputData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
