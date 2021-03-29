import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksEntryPresenterComponent } from './books-entry-presenter.component';

describe('BooksEntryPresenterComponent', () => {
  let component: BooksEntryPresenterComponent;
  let fixture: ComponentFixture<BooksEntryPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksEntryPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksEntryPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
