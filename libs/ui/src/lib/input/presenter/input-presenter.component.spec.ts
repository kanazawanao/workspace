import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPresenterComponent } from './input-presenter.component';

describe('InputPresenterComponent', () => {
  let component: InputPresenterComponent;
  let fixture: ComponentFixture<InputPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
