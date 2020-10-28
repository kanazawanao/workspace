import { User } from './user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  findOneByIdPw(email: string, password: string): Promise<User> {
    return this.usersRepository.findOne({ email: email, password: password });
  }

  put(id: number, user: User) {
    this.usersRepository.update(
      { id },
      {
        birthDay: user.birthDay,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      }
    );
  }
  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }

  post(user: User): Promise<InsertResult> {
    return this.usersRepository.insert(user);
  }
}
