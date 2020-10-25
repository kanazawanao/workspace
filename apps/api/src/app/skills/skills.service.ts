import { Skill } from './skill.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill)
    private skillsRepository: Repository<Skill>
  ) {}

  findAll(): Promise<Skill[]> {
    return this.skillsRepository.find();
  }

  findOne(id: string): Promise<Skill> {
    return this.skillsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.skillsRepository.delete(id);
  }

  async post(skill: Skill): Promise<InsertResult> {
    return await this.skillsRepository.insert(skill);
  }
}
