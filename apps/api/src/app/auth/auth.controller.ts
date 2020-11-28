import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Login } from './login.entity';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
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
}
