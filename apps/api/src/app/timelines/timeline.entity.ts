import { User } from '../users/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { ITimeline } from '@workspace/api-interfaces';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Timeline implements ITimeline {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  @ApiProperty()
  date: Date;

  @Column()
  @ApiProperty()
  event: string;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;
}
