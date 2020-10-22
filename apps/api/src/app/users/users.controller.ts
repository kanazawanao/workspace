import { User } from './user.entity';
import { UsersService } from './users.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('/api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id')
  async getData(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }
}
