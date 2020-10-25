import { SkillsService } from './skills.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { SkillsFacade } from './+state/skills.facade';

class MockSkillsFacade {}

describe('SkillsService', () => {
  let service: SkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        SkillsService,
        { provide: 'apiUrl', useValue: 'https://localhost:3333/api' },
        {
          provide: SkillsFacade,
          useClass: MockSkillsFacade,
        },
      ],
    });
    service = TestBed.inject(SkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
