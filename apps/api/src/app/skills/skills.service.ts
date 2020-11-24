import { Skill } from './skill.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill)
    private skillsRepository: Repository<Skill>
  ) {}

  findAll(): Promise<Skill[]> {
    return this.skillsRepository.find();
  }

  findOne(id: number): Promise<Skill> {
    return this.skillsRepository.findOne(id);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.skillsRepository.delete({ id });
  }

  async post(skill: Skill): Promise<InsertResult> {
    return await this.skillsRepository.insert(skill);
  }

  async put(id: number, skill: Skill): Promise<UpdateResult> {
    return await this.skillsRepository.update(
      { id },
      {
        skillLevel: skill.skillLevel,
        skillType: skill.skillType,
        skillName: skill.skillName,
        experienceYears: skill.experienceYears,
      }
    );
  }
}
