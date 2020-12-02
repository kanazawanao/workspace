import { TimelinesEntryContainerComponent } from './timelines-entry-container.component';
import { MockTimelinesService } from '../../mock-timelines.service';
import { TimelinesService } from '../../timelines.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { MockTimelinesFacade } from '../../data-access/+state/mock-timelines.facade';
import { TimelinesFacade } from '../../data-access/+state/timelines.facade';

@Component({
  selector: 'client-manager-timelines-entry-presenter',
  template: '',
  styleUrls: [],
})
export class MockTinelinesEntryPresenterComponent {
  @Input() formGroup: FormGroup;
  @Output() registEvent = new EventEmitter();
}

describe('TimelinesEntryContainerComponent', () => {
  let component: TimelinesEntryContainerComponent;
  let fixture: ComponentFixture<TimelinesEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TimelinesEntryContainerComponent,
        MockTinelinesEntryPresenterComponent,
      ],
      providers: [
        {
          provide: TimelinesService,
          useClass: MockTimelinesService,
        },
        {
          provide: TimelinesFacade,
          useClass: MockTimelinesFacade,
        },
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
