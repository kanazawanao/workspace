import { TimelinesEntryContainerComponent } from './tinelines-entry-container.component';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  selector: 'client-manager-tinelines-entry-presenter',
  template: '',
  styleUrls: [],
})
export class MockTinelinesEntryPresenterComponent {}

describe('TinelinesEntryContainerComponent', () => {
  let component: TimelinesEntryContainerComponent;
  let fixture: ComponentFixture<TimelinesEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TimelinesEntryContainerComponent,
        MockTinelinesEntryPresenterComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinesEntryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
