import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne(id).then((u) => {
      u.password = '**********';
      return u;
    });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.usersRepository
      .findOne({
        email: email,
      })
      .then((u) => {
        if (u) {
          u.password = '**********';
        }
        return u;
      });
  }

  async findOneByIdPw(email: string, password: string): Promise<User> {
    return await this.usersRepository
      .findOne({
        email: email,
      })
      .then((u) => {
        if (bcrypt.compareSync(password, u.password)) {
          u.password = '**********';
          return u;
        } else {
          return null;
        }
      });
  }

  async put(id: number, user: User): Promise<UpdateResult> {
    return await this.usersRepository.update(
      { id },
      {
        birthDay: user.birthDay,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      }
    );
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.usersRepository.delete({ id });
  }

  async post(user: User): Promise<InsertResult> {
    // TODO: 同じEmailは登録不可にする
    user.password = this.getPasswordHash(user.password);
    return await this.usersRepository.insert(user);
  }

  // パスワードをハッシュ化する
  private getPasswordHash(_password: String) {
    const saltRounds: number = 10;
    const salt: string = bcrypt.genSaltSync(saltRounds);
    console.log(bcrypt.hashSync(_password, salt));
    return bcrypt.hashSync(_password, salt);
  }
}
