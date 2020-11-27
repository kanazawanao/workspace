import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavPresenterComponent } from './sidenav-presenter.component';

describe('SidenavPresenterComponent', () => {
  let component: SidenavPresenterComponent;
  let fixture: ComponentFixture<SidenavPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
