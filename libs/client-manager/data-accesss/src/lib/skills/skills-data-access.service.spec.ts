import { SkillsDataAccessService } from './skills-data-access.service';
import { TestBed } from '@angular/core/testing';
import {
  HttpRequestService,
  MockHttpRequestService,
} from '@workspace/shared-service';

describe('SkillsService', () => {
  let service: SkillsDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SkillsDataAccessService,
        {
          provide: HttpRequestService,
          useValue: MockHttpRequestService,
        },
        { provide: 'apiUrl', useValue: 'https://localhost:3333/api' },
      ],
    });
    service = TestBed.inject(SkillsDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
