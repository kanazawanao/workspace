import { SidenavContainerComponent } from './sidenav-container.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('SidenavContainerComponent', () => {
  let component: SidenavContainerComponent;
  let fixture: ComponentFixture<SidenavContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavContainerComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
