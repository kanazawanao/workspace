import { TimelineContainerComponent } from './timeline-container.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TimelineContainerComponent', () => {
  let component: TimelineContainerComponent;
  let fixture: ComponentFixture<TimelineContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelineContainerComponent],
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
