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

  async login(user: ILogin): Promise<{ accessToken: string }> {
    const loginUser = await this.usersService.findOneByIdPw(
      user.email,
      user.password
    );
    const payload = {
      username: loginUser.firstName,
      userId: loginUser.id,
      email: loginUser.email,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async signUp(user: User): Promise<{ accessToken: string }> {
    return this.usersService.post(user).then(() => {
      const payload = {
        username: user.firstName,
        userId: user.id,
        email: user.email,
      };
      return {
        accessToken: this.jwtService.sign(payload),
      };
    });
  }

  async existEmail(email: string): Promise<boolean> {
    return await this.usersService.findOneByEmail(email).then((u) => {
      if (u) {
        return true;
      } else {
        return false;
      }
    });
  }
}
