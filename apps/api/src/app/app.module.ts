import { Skill } from './skills/skill.entity';
import { SkillsModule } from './skills/skills.module';
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
      entities: [User, Skill],
      synchronize: true,
    }),
    UsersModule,
    SkillsModule,
  ],
})
export class AppModule {}
