import { SidenavContainerComponent } from './sidenav-container.component';
import { SidenavPresenterInputData } from '../presenter/sidenav-presenter-input-data';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'ui-sidenav-presenter',
  template: '',
  styleUrls: [],
})
export class MockSidenavPresenterComponent {
  @Input() inputData: SidenavPresenterInputData;
}
describe('SidenavContainerComponent', () => {
  let component: SidenavContainerComponent;
  let fixture: ComponentFixture<SidenavContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavContainerComponent, MockSidenavPresenterComponent],
      imports: [BrowserAnimationsModule],
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
