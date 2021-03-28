import { UsersService } from './users.service';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

describe('UsersService', () => {
  let service: UsersService;
  let mockRouter = {
    navigate: jasmine.createSpy('navigate'),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsersService,
        { provide: FormBuilder, useValue: new FormBuilder() },
        { provide: Router, useValue: mockRouter },
      ],
    });
    service = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
