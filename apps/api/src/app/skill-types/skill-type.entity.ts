import { ApiProperty } from '@nestjs/swagger';
import { ISkillType } from '@workspace/api-interfaces';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class SkillType implements ISkillType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  skillTypeName: string;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn()
  updated!: Date;
}
