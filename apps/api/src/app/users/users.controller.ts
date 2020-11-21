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
  @ApiOperation({ summary: 'get users' })
  async getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'get user' })
  async getUser(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'post user' })
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
  @ApiOperation({ summary: 'delete user' })
  deleteUser(@Param(':id') id: string): Promise<void> {
    return this.usersService.remove(id);
  }
}
