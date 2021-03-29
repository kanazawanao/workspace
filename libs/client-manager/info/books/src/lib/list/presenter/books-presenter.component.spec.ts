import { BooksPresenterComponent } from './books-presenter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('BooksPresenterComponent', () => {
  let component: BooksPresenterComponent;
  let fixture: ComponentFixture<BooksPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
