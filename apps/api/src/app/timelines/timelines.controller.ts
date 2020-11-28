import { Timeline } from './timeline.entity';
import { TimelinesService } from './timelines.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Skill } from '../skills/skill.entity';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteResult, UpdateResult } from 'typeorm';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

@ApiTags('timelines')
@Controller('/api/timelines')
export class TimelinesController {
  constructor(private timelinesService: TimelinesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'get timelines' })
  async getSkills(): Promise<Timeline[]> {
    return this.timelinesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'get timeline' })
  async getSkill(@Param('id') id: number): Promise<Timeline> {
    return this.timelinesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'post timeline' })
  @ApiBody({ type: Timeline, description: 'timeline' })
  async postUser(@Body() body: Timeline) {
    console.log(body);
    return this.timelinesService.post(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'put timeline' })
  async putUser(
    @Param('id') id: number,
    @Body() timeline: Timeline
  ): Promise<UpdateResult> {
    return this.timelinesService.put(id, timeline);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  @ApiOperation({ summary: 'delete timeline' })
  async deleteUser(@Param(':id') id: number): Promise<DeleteResult> {
    return this.timelinesService.remove(id);
  }
}
