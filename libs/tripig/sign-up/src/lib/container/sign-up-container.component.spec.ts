import { SignUpContainerComponent } from './sign-up-container.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SignUpContainerComponent', () => {
  let component: SignUpContainerComponent;
  let fixture: ComponentFixture<SignUpContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignUpContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
