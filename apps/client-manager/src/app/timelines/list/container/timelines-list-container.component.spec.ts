import { TimelinesListContainerComponent } from './timelines-list-container.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TimelinesListContainerComponent', () => {
  let component: TimelinesListContainerComponent;
  let fixture: ComponentFixture<TimelinesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelinesListContainerComponent],
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
