import { SkillTypesListContainerComponent } from './skill-types-list-container.component';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  selector: 'client-manager-skill-types-list-presenter',
  template: '',
  styleUrls: [],
})
export class MockSkillTypesListPresenterComponent {}
describe('SkillTypesListContainerComponent', () => {
  let component: SkillTypesListContainerComponent;
  let fixture: ComponentFixture<SkillTypesListContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillTypesListContainerComponent,
        MockSkillTypesListPresenterComponent,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTypesListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
