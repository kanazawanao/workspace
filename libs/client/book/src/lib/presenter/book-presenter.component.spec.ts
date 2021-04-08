import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookPresenterComponent } from './book-presenter.component';

describe('BookPresenterComponent', () => {
  let component: BookPresenterComponent;
  let fixture: ComponentFixture<BookPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
