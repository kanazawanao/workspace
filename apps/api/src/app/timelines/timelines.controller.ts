import { Timeline } from './timeline.entity';
import { TimelinesService } from './timelines.service';
import { Skill } from '../skills/skill.entity';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('timelines')
@Controller('/api/timelines')
export class TimelinesController {
  constructor(private timelinesService: TimelinesService) {}

  @Get()
  async getSkills(): Promise<Timeline[]> {
    return this.timelinesService.findAll();
  }

  @Get(':id')
  async getSkill(@Param('id') id: string): Promise<Timeline> {
    return this.timelinesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'post timeline' })
  @ApiBody({ type: Timeline, description: 'timeline' })
  async postUser(@Body() body: Timeline) {
    console.log(body);
    return this.timelinesService.post(body);
  }
}
