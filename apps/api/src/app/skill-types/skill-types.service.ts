import { SkillType } from './skill-type.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class SkillTypesService {
  constructor(
    @InjectRepository(SkillType)
    private skillTypesRepository: Repository<SkillType>
  ) {}

  findAll(): Promise<SkillType[]> {
    return this.skillTypesRepository.find();
  }

  findOne(id: string): Promise<SkillType> {
    return this.skillTypesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.skillTypesRepository.delete(id);
  }

  async post(skill: SkillType): Promise<InsertResult> {
    return await this.skillTypesRepository.insert(skill);
  }
}
