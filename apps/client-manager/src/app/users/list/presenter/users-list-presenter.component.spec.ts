import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListPresenterComponent } from './users-list-presenter.component';

describe('UsersListPresenterComponent', () => {
  let component: UsersListPresenterComponent;
  let fixture: ComponentFixture<UsersListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersListPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
