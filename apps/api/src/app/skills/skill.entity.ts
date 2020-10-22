import { ISkill } from '@workspace/api-interfaces';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Skill implements ISkill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  skillType: string;

  @Column()
  skillName: string;

  @Column()
  experienceYears: number;

  @Column()
  skillLevel: number;
}
