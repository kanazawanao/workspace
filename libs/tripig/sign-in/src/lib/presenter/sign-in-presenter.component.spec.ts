import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInPresenterComponent } from './sign-in-presenter.component';

describe('SignInPresenterComponent', () => {
  let component: SignInPresenterComponent;
  let fixture: ComponentFixture<SignInPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignInPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
