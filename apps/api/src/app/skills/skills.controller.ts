import { Skill } from './skill.entity';
import { SkillsService } from './skills.service';
import { SkillType } from '../skill-types/skill-type.entity';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteResult, InsertResult, UpdateResult } from 'typeorm';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@ApiTags('skills')
@Controller('/api/skills')
export class SkillsController {
  constructor(private skillsService: SkillsService) {}

  @Get()
  @ApiOperation({ summary: 'get skills' })
  async getSkills(): Promise<Skill[]> {
    return this.skillsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get skill' })
  async getSkill(@Param('id') id: number): Promise<Skill> {
    return this.skillsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'post skill' })
  @ApiBody({ type: Skill, description: 'skill' })
  async postUser(@Body() body: Skill): Promise<InsertResult> {
    return this.skillsService.post(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'put skill' })
  async putUser(
    @Param('id') id: number,
    @Body() skill: Skill
  ): Promise<UpdateResult> {
    return this.skillsService.put(id, skill);
  }

  @Delete()
  @ApiOperation({ summary: 'delete skillType' })
  async deleteUser(@Param(':id') id: number): Promise<DeleteResult> {
    return this.skillsService.remove(id);
  }
}
