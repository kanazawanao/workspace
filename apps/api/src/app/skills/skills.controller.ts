import { Skill } from './skill.entity';
import { SkillsService } from './skills.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiConstant } from '@workspace/constants';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
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

const constants = ApiConstant;
@ApiTags(constants.skills)
@Controller(`/api${constants.skills}`)
export class SkillsController {
  constructor(private skillsService: SkillsService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'get skills' })
  async getSkills(): Promise<Skill[]> {
    return this.skillsService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'get skill' })
  async getSkill(@Param('id') id: number): Promise<Skill> {
    return this.skillsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'post skill' })
  @ApiBody({ type: Skill, description: 'skill' })
  async postUser(@Body() body: Skill): Promise<InsertResult> {
    return this.skillsService.post(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'put skill' })
  async putUser(
    @Param('id') id: number,
    @Body() skill: Skill
  ): Promise<UpdateResult> {
    return this.skillsService.put(id, skill);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  @ApiOperation({ summary: 'delete skillType' })
  async deleteUser(@Param(':id') id: number): Promise<DeleteResult> {
    return this.skillsService.remove(id);
  }
}
