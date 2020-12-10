import { of } from 'rxjs';

export class MockSkillsService {
  constructor() {}

  fetchInitData(): void {}

  fetchSkillsInfo() {
    return of([]);
  }
}
