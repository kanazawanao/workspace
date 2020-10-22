import { ApiProperty } from '@nestjs/swagger';
import { ISkill } from '@workspace/api-interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Skill implements ISkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ApiProperty()
  skillType: string;

  @Column()
  @ApiProperty()
  skillName: string;

  @Column()
  @ApiProperty()
  experienceYears: number;

  @Column()
  @ApiProperty()
  skillLevel: number;
}
