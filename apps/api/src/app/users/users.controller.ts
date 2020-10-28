import { User } from './user.entity';
import { UsersService } from './users.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { InsertResult } from 'typeorm';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@ApiTags('users')
@Controller('/api/users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  putUser(@Param('id') id: number, @Body() user: User) {
    return this.usersService.put(id, user);
  }

  @Post()
  @ApiOperation({ summary: 'post user' })
  @ApiBody({ type: User, description: 'user' })
  postUser(@Body() user: User): Promise<InsertResult> {
    return this.usersService.post(user);
  }

  @Delete()
  deleteUser(@Param(':id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
