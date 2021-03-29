import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksEntryContainerComponent } from './books-entry-container.component';

describe('BooksEntryContainerComponent', () => {
  let component: BooksEntryContainerComponent;
  let fixture: ComponentFixture<BooksEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksEntryContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksEntryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
