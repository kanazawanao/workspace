import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersEntryPresenterComponent } from './users-entry-presenter.component';

describe('UsersEntryPresenterComponent', () => {
  let component: UsersEntryPresenterComponent;
  let fixture: ComponentFixture<UsersEntryPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersEntryPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersEntryPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
