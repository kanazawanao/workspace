import { SkillType } from './skill-type.entity';
import { SkillTypesService } from './skill-types.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

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
}
