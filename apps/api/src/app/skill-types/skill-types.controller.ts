import { SkillType } from './skill-type.entity';
import { SkillTypesService } from './skill-types.service';
import { User } from '../users/user.entity';
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
} from '@nestjs/common';

@ApiTags('skill-types')
@Controller('/api/skill-types')
export class SkillTypesController {
  constructor(private skillTypesService: SkillTypesService) {}

  @Get()
  @ApiOperation({ summary: 'get skillTypes' })
  async getSkills(): Promise<SkillType[]> {
    return this.skillTypesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get skillType' })
  async getSkill(@Param('id') id: string): Promise<SkillType> {
    return this.skillTypesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'post skillType' })
  @ApiBody({ type: SkillType, description: 'skillType' })
  async postUser(@Body() body: SkillType) {
    console.log(body);
    return this.skillTypesService.post(body);
  }

  @Put(':id')
  @ApiOperation({ summary: 'put skillType' })
  async putUser(
    @Param('id') id: number,
    @Body() skillType: SkillType
  ): Promise<UpdateResult> {
    return this.skillTypesService.put(id, skillType);
  }

  @Delete()
  @ApiOperation({ summary: 'delete skillType' })
  async deleteUser(@Param(':id') id: number): Promise<DeleteResult> {
    return this.skillTypesService.remove(id);
  }
}
