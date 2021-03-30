import { Skill } from './skill.entity';
import { SkillsService } from './skills.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBody, ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
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
  Req,
  UseGuards,
} from '@nestjs/common';

const constants = ApiConstant;
@ApiTags(constants.skills)
@Controller(`/api${constants.skills}`)
@ApiSecurity('accessToken')
export class SkillsController {
  constructor(private skillsService: SkillsService) {}

  @Get()
  @ApiOperation({ summary: 'get skills' })
  async getSkills(): Promise<Skill[]> {
    return this.skillsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get skill' })
  async getSkill(@Req() request, @Param('id') id: number): Promise<Skill> {
    console.log(request.user);
    return this.skillsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'post skill' })
  @ApiBody({ type: Skill, description: 'skill' })
  async postSkill(@Req() request, @Body() body: Skill): Promise<InsertResult> {
    return this.skillsService.post(request.user.userId, body);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'put skill' })
  async putSkill(
    @Param('id') id: number,
    @Body() skill: Skill
  ): Promise<UpdateResult> {
    return this.skillsService.put(id, skill);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  @ApiOperation({ summary: 'delete skillType' })
  async deleteSkill(@Param(':id') id: number): Promise<DeleteResult> {
    return this.skillsService.remove(id);
  }
}
