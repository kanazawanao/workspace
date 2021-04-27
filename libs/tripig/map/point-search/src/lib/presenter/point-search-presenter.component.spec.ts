import { PointSearchPresenterComponent } from './point-search-presenter.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GoogleMapsModule } from '@angular/google-maps';
import { MockMapComponent } from '@workspace/ui';

describe('PointSearchPresenterComponent', () => {
  let component: PointSearchPresenterComponent;
  let fixture: ComponentFixture<PointSearchPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleMapsModule],
      declarations: [PointSearchPresenterComponent, MockMapComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PointSearchPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
