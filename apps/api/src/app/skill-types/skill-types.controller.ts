import { SkillType } from './skill-type.entity';
import { SkillTypesService } from './skill-types.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
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

@ApiTags('skilltypes')
@Controller('/api/skilltypes')
export class SkillTypesController {
  constructor(private skillTypesService: SkillTypesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'get skillTypes' })
  async getSkills(): Promise<SkillType[]> {
    return this.skillTypesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'get skillType' })
  async getSkill(@Param('id') id: string): Promise<SkillType> {
    return this.skillTypesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'post skillType' })
  @ApiBody({ type: SkillType, description: 'skillType' })
  async postUser(@Body() body: SkillType) {
    console.log(body);
    return this.skillTypesService.post(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'put skillType' })
  async putUser(
    @Param('id') id: number,
    @Body() skillType: SkillType
  ): Promise<UpdateResult> {
    return this.skillTypesService.put(id, skillType);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  @ApiOperation({ summary: 'delete skillType' })
  async deleteUser(@Param(':id') id: number): Promise<DeleteResult> {
    return this.skillTypesService.remove(id);
  }
}
