import { Timeline } from './timeline.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class TimelinesService {
  constructor(
    @InjectRepository(Timeline)
    private timelinesRepository: Repository<Timeline>
  ) {}

  async findAll(): Promise<Timeline[]> {
    return await this.timelinesRepository.find();
  }

  async findOne(id: number): Promise<Timeline> {
    return await this.timelinesRepository.findOne(id);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.timelinesRepository.delete({ id });
  }

  async post(skill: Timeline): Promise<InsertResult> {
    return await this.timelinesRepository.insert(skill);
  }

  async put(id: number, timeline: Timeline): Promise<UpdateResult> {
    return await this.timelinesRepository.update(
      { id },
      {
        event: timeline.event,
        date: timeline.date,
      }
    );
  }
}
