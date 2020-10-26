import { InputContainerComponent } from './input-container.component';
import { InputPresenterInputData } from '../presenter/input-presenter-input-data';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

/** プレゼンタコンポーネントのモック */
@Component({
  selector: 'ui-input-presenter',
  template: '',
  styleUrls: [],
})
export class MockInputPresenterComponent {
  @Input() inputData: InputPresenterInputData;
}

describe('InputContainerComponent', () => {
  let component: InputContainerComponent;
  let fixture: ComponentFixture<InputContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputContainerComponent, MockInputPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
