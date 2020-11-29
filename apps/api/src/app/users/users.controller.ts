import { User } from './user.entity';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiBody, ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ApiConstant } from '@workspace/constants';
import { DeleteResult, InsertResult } from 'typeorm';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

const constants = ApiConstant;
@ApiTags(constants.users)
@Controller(`/api${constants.users}`)
@ApiSecurity('accessToken')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  @ApiOperation({ summary: 'get users' })
  async getUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiOperation({ summary: 'get user' })
  async getUser(@Param('id') id: number): Promise<User> {
    return this.usersService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @ApiOperation({ summary: 'put user' })
  async putUser(@Param('id') id: number, @Body() user: User) {
    return this.usersService.put(id, user);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  @ApiOperation({ summary: 'post user' })
  @ApiBody({ type: User, description: 'user' })
  async postUser(@Body() user: User): Promise<InsertResult> {
    return this.usersService.post(user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  @ApiOperation({ summary: 'delete user' })
  async deleteUser(@Param(':id') id: number): Promise<DeleteResult> {
    return this.usersService.remove(id);
  }
}
