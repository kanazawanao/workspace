import { TestBed } from '@angular/core/testing';

import { SkillsEntryService } from './skills-entry.service';

describe('SkillsEntryService', () => {
  let service: SkillsEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillsEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
