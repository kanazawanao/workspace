import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteSearchContainerComponent } from './route-search-container.component';

describe('RouteSearchContainerComponent', () => {
  let component: RouteSearchContainerComponent;
  let fixture: ComponentFixture<RouteSearchContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteSearchContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
