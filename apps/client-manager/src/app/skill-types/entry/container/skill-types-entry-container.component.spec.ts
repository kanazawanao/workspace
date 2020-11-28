import { SkillTypesEntryContainerComponent } from './skill-types-entry-container.component';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  selector: 'client-manager-skill-types-entry-presenter',
  template: '',
  styleUrls: [],
})
export class MockSkillTypesEntryPresenterComponent {}
describe('SkillTypesEntryContainerComponent', () => {
  let component: SkillTypesEntryContainerComponent;
  let fixture: ComponentFixture<SkillTypesEntryContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillTypesEntryContainerComponent,
        MockSkillTypesEntryPresenterComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypesEntryContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
