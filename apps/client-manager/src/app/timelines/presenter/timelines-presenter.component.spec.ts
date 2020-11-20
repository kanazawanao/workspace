import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinesPresenterComponent } from './timelines-presenter.component';

describe('TimelinesPresenterComponent', () => {
  let component: TimelinesPresenterComponent;
  let fixture: ComponentFixture<TimelinesPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelinesPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinesPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
