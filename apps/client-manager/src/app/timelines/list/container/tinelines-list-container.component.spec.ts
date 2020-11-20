import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinelinesListContainerComponent } from './tinelines-list-container.component';

describe('TinelinesListContainerComponent', () => {
  let component: TinelinesListContainerComponent;
  let fixture: ComponentFixture<TinelinesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinelinesListContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinelinesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
