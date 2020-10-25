import { AboutPresenterComponent } from './about-presenter.component';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('AboutPresenterComponent', () => {
  let component: AboutPresenterComponent;
  let fixture: ComponentFixture<AboutPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutPresenterComponent],
      providers: [
        { provide: 'apiUrl', useValue: 'https://localhost:3333/api' },
      ],
      imports: [CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
