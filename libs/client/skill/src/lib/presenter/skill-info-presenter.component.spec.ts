import { SkillInfoPresenterComponent } from './skill-info-presenter.component';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UiTableModule } from '@workspace/ui';

describe('SkillInfoPresenterComponent', () => {
  let component: SkillInfoPresenterComponent;
  let fixture: ComponentFixture<SkillInfoPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillInfoPresenterComponent],
      providers: [
        { provide: 'apiUrl', useValue: 'https://localhost:3333/api' },
      ],
      imports: [CommonModule, UiTableModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillInfoPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
