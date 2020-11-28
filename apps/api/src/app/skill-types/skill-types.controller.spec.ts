import { MockSkillTypesService } from './mock-skill-types.service';
import { SkillTypesController } from './skill-types.controller';
import { SkillTypesService } from './skill-types.service';
import { Test, TestingModule } from '@nestjs/testing';
describe('SkillTypesController', () => {
  let controller: SkillTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkillTypesController],
      providers: [
        { provide: SkillTypesService, useClass: MockSkillTypesService },
      ],
    }).compile();

    controller = module.get<SkillTypesController>(SkillTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
