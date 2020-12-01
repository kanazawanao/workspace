import { UsersEntryPresenterComponent } from './users-entry-presenter.component';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersEntryModel } from '@workspace/client-manager/models';
import { UiDatePickerModule, UiInputModule } from '@workspace/ui';

const formGroup = new FormBuilder().group(new UsersEntryModel());
describe('UsersEntryPresenterComponent', () => {
  let component: UsersEntryPresenterComponent;
  let fixture: ComponentFixture<UsersEntryPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersEntryPresenterComponent],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        ReactiveFormsModule,
        UiInputModule,
        UiDatePickerModule,
        MatButtonModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersEntryPresenterComponent);
    component = fixture.componentInstance;
    component.formGroup = formGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
