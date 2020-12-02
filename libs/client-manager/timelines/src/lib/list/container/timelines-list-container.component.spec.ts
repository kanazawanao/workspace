import { TimelinesListContainerComponent } from './timelines-list-container.component';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ITimeline } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';
import { MockTimelinesFacade } from '../../data-access/+state/mock-timelines.facade';
import { TimelinesFacade } from '../../data-access/+state/timelines.facade';

@Component({
  selector: 'client-manager-timelines-list-presenter',
  template: '',
  styleUrls: [],
})
export class MockTimelinesListPresenterComponent {
  @Input() timelines$: Observable<ITimeline[]>;
  @Input() displayedColumns: string[];
}

describe('TimelinesListContainerComponent', () => {
  let component: TimelinesListContainerComponent;
  let fixture: ComponentFixture<TimelinesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TimelinesListContainerComponent,
        MockTimelinesListPresenterComponent,
      ],
      providers: [
        {
          provide: TimelinesFacade,
          useClass: MockTimelinesFacade,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
