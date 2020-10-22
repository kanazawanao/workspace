import { User } from './user.entity';
import { UsersService } from './users.service';
import { Controller, Get, Param } from '@nestjs/common';

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
}
