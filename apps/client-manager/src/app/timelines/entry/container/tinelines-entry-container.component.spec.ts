import { TinelinesEntryContainerComponent } from './tinelines-entry-container.component';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  selector: 'client-manager-tinelines-entry-presenter',
  template: '',
  styleUrls: [],
})
export class MockTinelinesEntryPresenterComponent {}

describe('TinelinesEntryContainerComponent', () => {
  let component: TinelinesEntryContainerComponent;
  let fixture: ComponentFixture<TinelinesEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TinelinesEntryContainerComponent,
        MockTinelinesEntryPresenterComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinelinesEntryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
