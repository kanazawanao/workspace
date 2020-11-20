import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinelinesListPresenterComponent } from './tinelines-list-presenter.component';

describe('TinelinesListPresenterComponent', () => {
  let component: TinelinesListPresenterComponent;
  let fixture: ComponentFixture<TinelinesListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinelinesListPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinelinesListPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
