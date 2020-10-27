import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPresenterComponent } from './select-presenter.component';

describe('SelectPresenterComponent', () => {
  let component: SelectPresenterComponent;
  let fixture: ComponentFixture<SelectPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
