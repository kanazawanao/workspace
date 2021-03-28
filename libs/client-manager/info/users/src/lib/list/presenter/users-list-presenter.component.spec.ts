import { UsersListPresenterComponent } from './users-list-presenter.component';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UiTableModule } from '@workspace/ui';

describe('UsersListPresenterComponent', () => {
  let component: UsersListPresenterComponent;
  let fixture: ComponentFixture<UsersListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListPresenterComponent],
      imports: [CommonModule, ReactiveFormsModule, UiTableModule],
    }).compileComponents();
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
