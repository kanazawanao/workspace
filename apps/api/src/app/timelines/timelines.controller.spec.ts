import { MockTimelinesService } from './mock-timelines.service';
import { TimelinesController } from './timelines.controller';
import { TimelinesService } from './timelines.service';
import { Test, TestingModule } from '@nestjs/testing';
describe('TimelinesController', () => {
  let controller: TimelinesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TimelinesController],
      providers: [
        { provide: TimelinesService, useClass: MockTimelinesService },
      ],
    }).compile();

    controller = module.get<TimelinesController>(TimelinesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
