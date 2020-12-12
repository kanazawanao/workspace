import { SidenavComponent } from './sidenav.component';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('SidenavPresenterComponent', () => {
  let component: SidenavComponent;
  let fixture: ComponentFixture<SidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavComponent],
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
    fixture = TestBed.createComponent(SidenavComponent);
    component = fixture.componentInstance;
    component.headerTitle='test';
    component.menuTitle= 'test';
    component.options= [
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
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
