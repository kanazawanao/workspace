import { InputPresenterInputData } from './input-presenter-input-data';
import { InputPresenterComponent } from './input-presenter.component';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const presenterInputData: InputPresenterInputData = {
  formControl: new FormControl(''),
  label: 'label',
};

describe('InputPresenterComponent', () => {
  let component: InputPresenterComponent;
  let fixture: ComponentFixture<InputPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputPresenterComponent],
      imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatInputModule,
        MatIconModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputPresenterComponent);
    component = fixture.componentInstance;
    component.inputData = presenterInputData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
