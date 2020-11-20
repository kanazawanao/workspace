import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinesEntryPresenterComponent } from './timelines-entry-presenter.component';

describe('TimelinesEntryPresenterComponent', () => {
  let component: TimelinesEntryPresenterComponent;
  let fixture: ComponentFixture<TimelinesEntryPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelinesEntryPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinesEntryPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
