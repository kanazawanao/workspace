import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinelinesEntryPresenterComponent } from './tinelines-entry-presenter.component';

describe('TinelinesEntryPresenterComponent', () => {
  let component: TinelinesEntryPresenterComponent;
  let fixture: ComponentFixture<TinelinesEntryPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinelinesEntryPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinelinesEntryPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
