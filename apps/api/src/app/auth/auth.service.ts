import { User } from '../users/user.entity';
import { UsersService } from '../users/users.service';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ILogin } from '@workspace/api-interfaces';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.findOneByIdPw(email, password);
    if (user) {
      return user;
    }
    return null;
  }

  async login(user: ILogin) {
    const payload = { username: user.email, sub: user.password };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
