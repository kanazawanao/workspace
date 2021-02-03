import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabCategoryComponent } from './tab-category.component';

describe('TabCategoryComponent', () => {
  let component: TabCategoryComponent;
  let fixture: ComponentFixture<TabCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
