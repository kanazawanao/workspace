import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPresenterComponent } from './about-presenter.component';

describe('AboutPresenterComponent', () => {
  let component: AboutPresenterComponent;
  let fixture: ComponentFixture<AboutPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPresenterComponent ]
    })
    .compileComponents();
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
