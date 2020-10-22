import { Skill } from './skill.entity';
import { SkillsService } from './skills.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('skills')
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
}
