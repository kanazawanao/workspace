import { ListContainerComponent } from './list-container.component';
import { ListPresenterInputData } from '../presenter/list-presenter-input-data';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

/** プレゼンタコンポーネントのモック */
@Component({
  selector: 'ui-list-presenter',
  template: '',
  styleUrls: [],
})
export class MockListPresenterComponent {
  @Input() inputData: ListPresenterInputData;
}

describe('ListContainerComponent', () => {
  let component: ListContainerComponent;
  let fixture: ComponentFixture<ListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListContainerComponent, MockListPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
