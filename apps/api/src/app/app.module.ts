import { AuthModule } from './auth/auth.module';
import { Book } from './books/book.entity';
import { BooksModule } from './books/books.module';
import { SkillType } from './skill-types/skill-type.entity';
import { SkillTypesModule } from './skill-types/skill-types.module';
import { Skill } from './skills/skill.entity';
import { SkillsModule } from './skills/skills.module';
import { Timeline } from './timelines/timeline.entity';
import { TimelinesModule } from './timelines/timelines.module';
import { User } from './users/user.entity';
import { UsersModule } from './users/users.module';
import { environment } from '../environments/environment';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: environment.host,
      port: environment.port,
      username: environment.username,
      password: environment.password,
      database: environment.database,
      entities: [User, Skill, Timeline, SkillType, Book],
      synchronize: true,
      charset: 'utf8mb4',
    }),
    AuthModule,
    UsersModule,
    SkillsModule,
    TimelinesModule,
    SkillTypesModule,
    BooksModule,
  ],
})
export class AppModule {}
