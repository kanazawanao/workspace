import { ApiProperty } from '@nestjs/swagger';
import { ISkill } from '@workspace/api-interfaces';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Skill implements ISkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  skillType: number;

  @Column()
  @ApiProperty()
  skillName: string;

  @Column()
  @ApiProperty()
  experienceYears: number;

  @Column()
  @ApiProperty()
  skillLevel: number;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;
}
