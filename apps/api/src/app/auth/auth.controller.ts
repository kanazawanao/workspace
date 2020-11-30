import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { Login } from './login.entity';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ApiConstant } from '@workspace/constants';

const constants = ApiConstant;
@ApiTags('auth')
@Controller('/api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'login' })
  @ApiBody({ type: Login, description: 'login' })
  async login(@Body() login: Login) {
    return this.authService.login(login);
  }

  @UseGuards(JwtAuthGuard)
  @Get('check')
  @ApiOperation({ summary: 'auth check' })
  async authCheck(): Promise<boolean> {
    return true;
  }
}
