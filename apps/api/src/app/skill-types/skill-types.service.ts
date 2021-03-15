import { SkillType } from './skill-type.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class SkillTypesService {
  constructor(
    @InjectRepository(SkillType)
    private skillTypesRepository: Repository<SkillType>
  ) {}

  async findAll(): Promise<SkillType[]> {
    return await this.skillTypesRepository.find();
  }

  async findOne(id: string): Promise<SkillType> {
    return await this.skillTypesRepository.findOne(id);
  }

  async put(id: number, skillType: SkillType): Promise<UpdateResult> {
    return await this.skillTypesRepository.update(
      { id },
      {
        skillTypeName: skillType.skillTypeName,
      }
    );
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.skillTypesRepository.delete({ id });
  }

  async post(skill: SkillType): Promise<InsertResult> {
    return await this.skillTypesRepository.insert(skill);
  }
}
