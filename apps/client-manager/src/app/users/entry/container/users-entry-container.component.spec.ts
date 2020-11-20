import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersEntryContainerComponent } from './users-entry-container.component';

describe('UsersEntryContainerComponent', () => {
  let component: UsersEntryContainerComponent;
  let fixture: ComponentFixture<UsersEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersEntryContainerComponent ]
    })
    .compileComponents();
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
