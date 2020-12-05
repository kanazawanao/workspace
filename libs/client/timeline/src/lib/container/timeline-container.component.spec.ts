import { TimelineContainerComponent } from './timeline-container.component';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  selector: 'client-timeline-presenter',
  template: '',
  styleUrls: [],
})
export class MockTimelinePresenterComponent {}

describe('TimelineContainerComponent', () => {
  let component: TimelineContainerComponent;
  let fixture: ComponentFixture<TimelineContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TimelineContainerComponent,
        MockTimelinePresenterComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
