import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSearchComponent } from './point-search.component';

describe('PointSearchComponent', () => {
  let component: PointSearchComponent;
  let fixture: ComponentFixture<PointSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
