import { TableContainerComponent } from './table-container.component';
import { TablePresenterInputData } from '../presenter/table-presenter-input-data';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

/** プレゼンタコンポーネントのモック */
@Component({
  selector: 'ui-table-presenter',
  template: '',
  styleUrls: [],
})
export class MockTalbePresenterComponent {
  @Input() inputData: TablePresenterInputData;
}

describe('TableContainerComponent', () => {
  let component: TableContainerComponent;
  let fixture: ComponentFixture<TableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableContainerComponent, MockTalbePresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
