import { SignUpPresenterComponent } from './sign-up-presenter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SignUpPresenterComponent', () => {
  let component: SignUpPresenterComponent;
  let fixture: ComponentFixture<SignUpPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
