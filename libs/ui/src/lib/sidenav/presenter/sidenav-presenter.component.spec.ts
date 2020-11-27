import { SidenavPresenterInputData } from './sidenav-presenter-input-data';
import { SidenavPresenterComponent } from './sidenav-presenter.component';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

const inputData: SidenavPresenterInputData = {
  headerTitle: 'test',
  menuTitle: 'test',
  options: [
    {
      value: 'select1',
      viewValue: 'select1',
    },
    {
      value: 'select2',
      viewValue: 'select2',
    },
    {
      value: 'select3',
      viewValue: 'select3',
    },
  ],
};
describe('SidenavPresenterComponent', () => {
  let component: SidenavPresenterComponent;
  let fixture: ComponentFixture<SidenavPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavPresenterComponent],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        RouterTestingModule,
        MatSidenavModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavPresenterComponent);
    component = fixture.componentInstance;
    component.inputData = inputData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
