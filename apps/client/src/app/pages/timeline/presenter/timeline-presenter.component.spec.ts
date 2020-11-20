import { TimelinePresenterComponent } from './timeline-presenter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TimelinePresenterComponent', () => {
  let component: TimelinePresenterComponent;
  let fixture: ComponentFixture<TimelinePresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelinePresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinePresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
