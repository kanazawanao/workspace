import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { ExistEmail, Login } from './login.entity';
import { UsersService } from '../users/users.service';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ApiConstant } from '@workspace/constants';

const constants = ApiConstant;
@ApiTags('auth')
@Controller('/api/auth')
@ApiSecurity('accessToken')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('existemail')
  @ApiOperation({ summary: 'exist email' })
  async existEmailCheck(@Body() email: ExistEmail): Promise<boolean> {
    return this.authService.existEmail(email.email);
  }

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
