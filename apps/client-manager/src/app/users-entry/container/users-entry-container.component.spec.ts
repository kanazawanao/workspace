import { UsersEntryContainerComponent } from './users-entry-container.component';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

/** プレゼンタコンポーネントのモック */
@Component({
  selector: 'client-manager-users-entry-presenter',
  template: '',
  styleUrls: [],
})
export class MockUsersEntryPresenterComponent {}

describe('UsersEntryContainerComponent', () => {
  let component: UsersEntryContainerComponent;
  let fixture: ComponentFixture<UsersEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        UsersEntryContainerComponent,
        MockUsersEntryPresenterComponent,
      ],
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
