import { Skill } from './skill.entity';
import { SkillsService } from './skills.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('skills')
@Controller('/api/skills')
export class SkillsController {
  constructor(private readonly skillsService: SkillsService) {}
  @Get()
  async getUsers(): Promise<Skill[]> {
    return this.skillsService.findAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<Skill> {
    return this.skillsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'post skill' })
  @ApiBody({ type: Skill, description: 'skill' })
  postUser(@Body() body: Skill) {
    return body;
  }
}
