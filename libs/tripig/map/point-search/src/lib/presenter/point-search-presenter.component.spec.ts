import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSearchPresenterComponent } from './point-search-presenter.component';

describe('PointSearchPresenterComponent', () => {
  let component: PointSearchPresenterComponent;
  let fixture: ComponentFixture<PointSearchPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointSearchPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSearchPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
