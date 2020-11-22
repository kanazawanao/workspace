import { TimelinesListContainerComponent } from './timelines-list-container.component';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  selector: 'client-manager-timelines-list-presenter',
  template: '',
  styleUrls: [],
})
export class MockTimelinesListPresenterComponent {}

describe('TimelinesListContainerComponent', () => {
  let component: TimelinesListContainerComponent;
  let fixture: ComponentFixture<TimelinesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TimelinesListContainerComponent,
        MockTimelinesListPresenterComponent,
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
