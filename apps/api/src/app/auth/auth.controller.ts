import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ILogin } from '@workspace/api-interfaces';

@ApiTags('auth')
@Controller('/api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({ summary: 'login' })
  async login(@Body() login: ILogin) {
    console.log(login);
    return this.authService.login(login);
  }
}
