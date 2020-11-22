import { UsersEntryContainerComponent } from './users-entry-container.component';
import { MockUsersService } from '../../mock-users.service';
import { UsersService } from '../../users.service';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { EditType } from '@workspace/constants';
import { MockUsersFacade } from '../../+state/mock-users.facade';
import { UsersFacade } from '../../+state/users.facade';

@Component({
  selector: 'client-manager-users-entry-presenter',
  template: '',
  styleUrls: [],
})
export class MockUsersEntryPresenterComponent {
  @Input() formGroup: FormGroup;
  @Input() editMode: EditType;
  @Output() registEvent = new EventEmitter();
  @Output() updateEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter();
}

describe('UsersEntryContainerComponent', () => {
  let component: UsersEntryContainerComponent;
  let fixture: ComponentFixture<UsersEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UsersEntryContainerComponent,
        MockUsersEntryPresenterComponent,
      ],
      providers: [
        {
          provide: UsersFacade,
          useValue: MockUsersFacade,
        },
        {
          provide: UsersService,
          useValue: MockUsersService,
        },
      ],
      imports: [CommonModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersEntryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
