import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
    return await this.usersRepository.findOne(id);
  }

  async findOneByIdPw(email: string, password: string): Promise<User> {
    return await this.usersRepository.findOne({
      email: email,
      password: password,
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
    return await this.usersRepository.insert(user);
  }
}
