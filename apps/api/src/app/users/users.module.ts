import { User } from './user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthService } from '../auth/auth.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UsersService],
  providers: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
