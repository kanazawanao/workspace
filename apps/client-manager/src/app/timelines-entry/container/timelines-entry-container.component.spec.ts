import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinesEntryContainerComponent } from './timelines-entry-container.component';

describe('TimelinesEntryContainerComponent', () => {
  let component: TimelinesEntryContainerComponent;
  let fixture: ComponentFixture<TimelinesEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelinesEntryContainerComponent ]
    })
    .compileComponents();
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
