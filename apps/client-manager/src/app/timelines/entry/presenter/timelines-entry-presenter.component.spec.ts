import { TimelinesEntryPresenterComponent } from './timelines-entry-presenter.component';
import { TimelinesEntryModel } from '../timelines-entry-model';
import { CommonModule } from '@angular/common';
import { EventEmitter } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiDatePickerModule, UiInputModule } from '@workspace/ui';

const formGroup = new FormBuilder().group(new TimelinesEntryModel());
describe('TimelinesEntryPresenterComponent', () => {
  let component: TimelinesEntryPresenterComponent;
  let fixture: ComponentFixture<TimelinesEntryPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelinesEntryPresenterComponent],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        UiInputModule,
        UiDatePickerModule,
        ReactiveFormsModule,
        MatButtonModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinesEntryPresenterComponent);
    component = fixture.componentInstance;
    component.formGroup = formGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
