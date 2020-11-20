import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinelinesEntryContainerComponent } from './tinelines-entry-container.component';

describe('TinelinesEntryContainerComponent', () => {
  let component: TinelinesEntryContainerComponent;
  let fixture: ComponentFixture<TinelinesEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinelinesEntryContainerComponent ]
    })
    .compileComponents();
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
