import { SkillType } from './skill-type.entity';
import { SkillTypesController } from './skill-types.controller';
import { SkillTypesService } from './skill-types.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([SkillType])],
  exports: [TypeOrmModule],
  controllers: [SkillTypesController],
  providers: [SkillTypesService],
})
export class SkillTypesModule {}
