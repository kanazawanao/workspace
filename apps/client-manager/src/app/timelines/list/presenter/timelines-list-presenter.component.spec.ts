import { TimelinesListPresenterComponent } from './timelines-list-presenter.component';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UiTableModule } from '@workspace/ui';

describe('TimelinesListPresenterComponent', () => {
  let component: TimelinesListPresenterComponent;
  let fixture: ComponentFixture<TimelinesListPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimelinesListPresenterComponent],
      imports: [CommonModule, ReactiveFormsModule, UiTableModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelinesListPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
