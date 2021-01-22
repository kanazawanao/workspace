import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSearchPresenterComponent } from './route-search-presenter.component';

describe('RouteSearchPresenterComponent', () => {
  let component: RouteSearchPresenterComponent;
  let fixture: ComponentFixture<RouteSearchPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteSearchPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSearchPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
