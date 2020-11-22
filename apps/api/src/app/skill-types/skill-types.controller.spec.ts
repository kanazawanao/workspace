import { Test, TestingModule } from '@nestjs/testing';
import { SkillTypesController } from './skill-types.controller';

describe('SkillTypesController', () => {
  let controller: SkillTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkillTypesController],
    }).compile();

    controller = module.get<SkillTypesController>(SkillTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
