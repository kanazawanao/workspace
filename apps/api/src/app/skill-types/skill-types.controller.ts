import { SkillType } from './skill-type.entity';
import { SkillTypesService } from './skill-types.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
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
  UseGuards,
} from '@nestjs/common';

const constants = ApiConstant;
@ApiTags(constants.skilltypes)
@Controller(`/api${constants.skilltypes}`)
@ApiSecurity('accessToken')
export class SkillTypesController {
  constructor(private skillTypesService: SkillTypesService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'get skillTypes' })
  async getSkillTypes(): Promise<SkillType[]> {
    return this.skillTypesService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'get skillType' })
  async getSkillType(@Param('id') id: string): Promise<SkillType> {
    return this.skillTypesService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'post skillType' })
  @ApiBody({ type: SkillType, description: 'skillType' })
  async postSkillType(@Body() body: SkillType) {
    console.log(body);
    return this.skillTypesService.post(body);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'put skillType' })
  async putSkillType(
    @Param('id') id: number,
    @Body() skillType: SkillType
  ): Promise<UpdateResult> {
    return this.skillTypesService.put(id, skillType);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  @ApiOperation({ summary: 'delete skillType' })
  async deleteSkillType(@Param(':id') id: number): Promise<DeleteResult> {
    return this.skillTypesService.remove(id);
  }
}
