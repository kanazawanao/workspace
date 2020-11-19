import { SkillsContainerComponent } from './skills-container.component';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

/** プレゼンタコンポーネントのモック */
@Component({
  selector: 'client-manager-skills-presenter',
  template: '',
  styleUrls: [],
})
export class MockSkillsPresenterComponent {}

describe('SkillsContainerComponent', () => {
  let component: SkillsContainerComponent;
  let fixture: ComponentFixture<SkillsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsContainerComponent, MockSkillsPresenterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
