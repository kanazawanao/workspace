import { UsersContainerComponent } from './users-container.component';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

/** プレゼンタコンポーネントのモック */
@Component({
  selector: 'client-manager-users-presenter',
  template: '',
  styleUrls: [],
})
export class MockUsersPresenterComponent {}

describe('UsersContainerComponent', () => {
  let component: UsersContainerComponent;
  let fixture: ComponentFixture<UsersContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersContainerComponent, MockUsersPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
