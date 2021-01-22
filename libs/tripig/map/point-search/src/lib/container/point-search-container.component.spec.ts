import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointSearchContainerComponent } from './point-search-container.component';

describe('PointSearchContainerComponent', () => {
  let component: PointSearchContainerComponent;
  let fixture: ComponentFixture<PointSearchContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PointSearchContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
