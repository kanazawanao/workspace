import { UsersListContainerComponent } from './users-list-container.component';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IUser } from '@workspace/api-interfaces';
import { Observable } from 'rxjs';
import {
  UsersFacade,
  MockUsersFacade,
} from '@workspace/client-manager/data-accesss';

@Component({
  selector: 'client-manager-users-list-presenter',
  template: '',
  styleUrls: [],
})
export class MockUsersListPresenterComponent {
  @Input() users$: Observable<IUser[]>;
  @Input() displayedColumns: string[];
}

describe('UsersListContainerComponent', () => {
  let component: UsersListContainerComponent;
  let fixture: ComponentFixture<UsersListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UsersListContainerComponent,
        MockUsersListPresenterComponent,
      ],
      providers: [
        {
          provide: UsersFacade,
          useValue: MockUsersFacade,
        },
      ],
      imports: [CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
