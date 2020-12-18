import { SkillTypesDataAccessService } from './skill-types-data-access.service';
import { TestBed } from '@angular/core/testing';
import {
  HttpRequestService,
  MockHttpRequestService,
} from '@workspace/shared-service';

describe('SkillTypesDataAccessService', () => {
  let service: SkillTypesDataAccessService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SkillTypesDataAccessService,
        {
          provide: HttpRequestService,
          MockHttpRequestService,
        },
        { provide: 'apiUrl', useValue: 'https://localhost:3333/api' },
      ],
    });
    service = TestBed.inject(SkillTypesDataAccessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
