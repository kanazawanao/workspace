import { LoginPresenterComponent } from './login-presenter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('LoginPresenterComponent', () => {
  let component: LoginPresenterComponent;
  let fixture: ComponentFixture<LoginPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
