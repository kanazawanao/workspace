import { SkillsEntryContainerComponent } from './skills-entry-container.component';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

/** プレゼンタコンポーネントのモック */
@Component({
  selector: 'client-manager-skills-entry-presenter',
  template: '',
  styleUrls: [],
})
export class MockSkillsEntryPresenterComponent {}

describe('SkillsEntryContainerComponent', () => {
  let component: SkillsEntryContainerComponent;
  let fixture: ComponentFixture<SkillsEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillsEntryContainerComponent,
        MockSkillsEntryPresenterComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsEntryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
