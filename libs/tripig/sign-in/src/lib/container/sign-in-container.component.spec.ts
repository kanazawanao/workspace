import { MockSignInPresenterComponent } from './mock-sign-in-presenter.component';
import { SignInContainerComponent } from './sign-in-container.component';
import { MockSigninService } from '../mock-sign-in.service';
import { SignInService } from '../sign-in.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('SignInContainerComponent', () => {
  let component: SignInContainerComponent;
  let fixture: ComponentFixture<SignInContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignInContainerComponent, MockSignInPresenterComponent],
      imports: [FormsModule, ReactiveFormsModule],
      providers: [
        {
          provide: SignInService,
          useClass: MockSigninService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
