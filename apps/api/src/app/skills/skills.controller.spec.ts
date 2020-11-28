import { MockSkillsService } from './mock-skills.service';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';
import { Test, TestingModule } from '@nestjs/testing';
describe('SkillsController', () => {
  let controller: SkillsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SkillsController],
      providers: [{ provide: SkillsService, useClass: MockSkillsService }],
    }).compile();

    controller = module.get<SkillsController>(SkillsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
