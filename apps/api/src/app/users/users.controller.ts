import { User } from './user.entity';
import { UsersService } from './users.service';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  async getUser(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'post user' })
  @ApiBody({ type: User, description: 'user' })
  postUser(@Body() body: User) {
    return body;
  }
}
