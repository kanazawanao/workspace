import { AboutPresenterComponent } from './about-presenter.component';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  selector: 'ui-list-container',
  template: '',
  styleUrls: [],
})
export class MockTableContainerComponent {
  @Input() dataSource: any;
}

describe('AboutPresenterComponent', () => {
  let component: AboutPresenterComponent;
  let fixture: ComponentFixture<AboutPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutPresenterComponent, MockTableContainerComponent],
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
