import { AboutContainerComponent } from './about-container.component';
import { AboutService } from '../about.service';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  selector: 'client-about-presenter',
  template: '',
  styleUrls: [],
})
export class MockAboutPresenterComponent {}

class MockAboutService {}

describe('AboutContainerComponent', () => {
  let component: AboutContainerComponent;
  let fixture: ComponentFixture<AboutContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutContainerComponent, MockAboutPresenterComponent],
      providers: [
        {
          provide: AboutService,
          UseClass: MockAboutService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
