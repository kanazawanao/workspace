import { Timeline } from './timeline.entity';
import { TimelinesService } from './timelines.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Skill } from '../skills/skill.entity';
import { ApiBody, ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ApiConstant } from '@workspace/constants';
import { DeleteResult, UpdateResult } from 'typeorm';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';

const constants = ApiConstant;
@ApiTags(constants.timelines)
@Controller(`/api${constants.timelines}`)
@ApiSecurity('accessToken')
export class TimelinesController {
  constructor(private timelinesService: TimelinesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'get timelines' })
  async getTimelines(): Promise<Timeline[]> {
    return this.timelinesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'get timeline' })
  async getTimeline(@Param('id') id: number): Promise<Timeline> {
    return this.timelinesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'post timeline' })
  @ApiBody({ type: Timeline, description: 'timeline' })
  async postTimeline(@Req() request, @Body() body: Timeline) {
    console.log(body);
    return this.timelinesService.post(request.user.userId, body);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'put timeline' })
  async putTimeline(
    @Param('id') id: number,
    @Body() timeline: Timeline
  ): Promise<UpdateResult> {
    return this.timelinesService.put(id, timeline);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  @ApiOperation({ summary: 'delete timeline' })
  async deleteTimeline(@Param(':id') id: number): Promise<DeleteResult> {
    return this.timelinesService.remove(id);
  }
}
