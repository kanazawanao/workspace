import { Skill } from './skill.entity';
import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  exports: [TypeOrmModule],
  controllers: [SkillsController],
  providers: [SkillsService],
})
export class SkillsModule {}
