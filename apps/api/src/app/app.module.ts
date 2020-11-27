import { AuthModule } from './auth/auth.module';
import { SkillType } from './skill-types/skill-type.entity';
import { SkillTypesModule } from './skill-types/skill-types.module';
import { Skill } from './skills/skill.entity';
import { SkillsModule } from './skills/skills.module';
import { Timeline } from './timelines/timeline.entity';
import { TimelinesModule } from './timelines/timelines.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [User, Skill, Timeline, SkillType],
      synchronize: true,
      charset: 'utf8mb4',
    }),
    AuthModule,
    UsersModule,
    SkillsModule,
    TimelinesModule,
    SkillTypesModule,
  ],
})
export class AppModule {}
