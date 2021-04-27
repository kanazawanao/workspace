import { PointSearchContainerComponent } from './point-search-container.component';
import { MockPointSearchPresenterComponent } from '../presenter/mock-point-search-presenter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleMapsModule } from '@angular/google-maps';

describe('PointSearchContainerComponent', () => {
  let component: PointSearchContainerComponent;
  let fixture: ComponentFixture<PointSearchContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleMapsModule],
      declarations: [
        PointSearchContainerComponent,
        MockPointSearchPresenterComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSearchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
