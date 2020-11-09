import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersPresenterComponent } from './users-presenter.component';

describe('UsersPresenterComponent', () => {
  let component: UsersPresenterComponent;
  let fixture: ComponentFixture<UsersPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
