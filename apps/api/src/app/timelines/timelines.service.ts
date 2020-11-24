import { Timeline } from './timeline.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class TimelinesService {
  constructor(
    @InjectRepository(Timeline)
    private timelinesRepository: Repository<Timeline>
  ) {}

  findAll(): Promise<Timeline[]> {
    return this.timelinesRepository.find();
  }

  findOne(id: number): Promise<Timeline> {
    return this.timelinesRepository.findOne(id);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.timelinesRepository.delete({ id });
  }

  async post(skill: Timeline): Promise<InsertResult> {
    return await this.timelinesRepository.insert(skill);
  }
}
