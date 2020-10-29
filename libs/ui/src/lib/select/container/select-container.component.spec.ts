import { SelectContainerComponent } from './select-container.component';
import { SelectPresenterInputData } from '../presenter/select-presenter-input-data';
import { UiSelectModule } from '../ui-select.module';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** プレゼンタコンポーネントのモック */
@Component({
  selector: 'ui-select-presenter',
  template: '',
  styleUrls: [],
})
export class MockSelectPresenterComponent {
  @Input() inputData: SelectPresenterInputData;
}

describe('SelectContainerComponent', () => {
  let component: SelectContainerComponent;
  let fixture: ComponentFixture<SelectContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectContainerComponent, MockSelectPresenterComponent],
      imports: [
        CommonModule,
        MatSelectModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
