import { Timeline } from './timeline.entity';
import { TimelinesController } from './timelines.controller';
import { TimelinesService } from './timelines.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Timeline])],
  exports: [TimelinesModule],
  controllers: [TimelinesController],
  providers: [TimelinesService],
})
export class TimelinesModule {}
