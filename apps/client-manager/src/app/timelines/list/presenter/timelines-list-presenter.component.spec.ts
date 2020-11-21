import { TimelinesListPresenterComponent } from './timelines-list-presenter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TimelinesListPresenterComponent', () => {
  let component: TimelinesListPresenterComponent;
  let fixture: ComponentFixture<TimelinesListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelinesListPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinesListPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
