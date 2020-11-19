import { Timeline } from './timeline.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class TimelinesService {
  constructor(
    @InjectRepository(Timeline)
    private timelinesRepository: Repository<Timeline>
  ) {}

  findAll(): Promise<Timeline[]> {
    return this.timelinesRepository.find();
  }

  findOne(id: string): Promise<Timeline> {
    return this.timelinesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.timelinesRepository.delete(id);
  }

  async post(skill: Timeline): Promise<InsertResult> {
    return await this.timelinesRepository.insert(skill);
  }
}
